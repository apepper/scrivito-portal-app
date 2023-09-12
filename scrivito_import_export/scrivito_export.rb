require "active_support/all"
require 'dotenv'
require "fileutils"
require_relative "rest_api"

Dotenv.load('.env', '.env.local')

class ScrivitoExport
  def export(dir_name:)
    base_url = ENV.fetch("SCRIVITO_BASE_URL") { "https://api.scrivito.com" }
    tenant = ENV.fetch("EXPORT_FROM_SCRIVITO_TENANT") or raise "missing EXPORT_FROM_SCRIVITO_TENANT env"
    api_key = ENV.fetch("EXPORT_FROM_SCRIVITO_API_KEY") or raise "missing EXPORT_FROM_SCRIVITO_API_KEY env"

    puts "Exporting from #{tenant} to #{dir_name}"
    api = RestApi.new(base_url, tenant, api_key)

    if File.exist?(dir_name)
      FileUtils.rm_rf(File.join(dir_name, "objs.json"))
      FileUtils.rm_rf(File.join(dir_name, "custom_visibility_categories.json"))
      FileUtils.rm_rf(File.join(dir_name, "assets"))
      puts "Deleted old file(s) objs.json and custom_visibility_categories.json and folder assets"
    else
      FileUtils.mkdir_p(dir_name)
    end

    visibility_categories_response = api.get("visibility_categories") || {}
    custom_visibility_categories = visibility_categories_response.fetch("results")

    if custom_visibility_categories.present?
      File.open(File.join(dir_name, "custom_visibility_categories.json"), "w") do |file|
        file.write(JSON.generate(custom_visibility_categories))
      end
    end

    obj_count = 0
    File.open(File.join(dir_name, "objs.json"), "w") do |file|
      rev_id, obj_ids = get_obj_ids(api)
      obj_ids.each do |id|
        obj = api.get("revisions/#{rev_id}/objs/#{id}")
        obj_attrs = export_attrs(api, obj, dir_name)
        puts "Exporting: #{obj_attrs['_path']} (#{obj_attrs['_obj_class']})"
        file.write(JSON.generate(obj_attrs))
        file.write("\n")
        obj_count += 1
      end
    end
    puts "Exported #{obj_count} objects to #{dir_name}/objs.json"
  end

  private

  def export_attrs(api, attrs, dir_name)
    attrs.inject({}) do |h, (k, v)|
      h[k] =
        if k == "_widget_pool"
          v.inject({}) do |h1, (k1, v1)|
            h1[k1] = export_attrs(api, v1, dir_name)
            h1
          end
        elsif k.starts_with?("_")
          v
        else
          case v.first
          when "binary"
            ["binary", {"file" => export_binary(api, v.last["id"], dir_name)}]
          else
            v
          end
        end
      h
    end
  end

  def export_binary(api, binary_id, dir_name)
    blob_id = api.normalize_path_component(binary_id)
    url = api.get("blobs/#{blob_id}")["private_access"]["get"]["url"]
    FileUtils.mkdir_p(File.join(dir_name, 'assets'))
    filename = "assets/#{File.dirname(binary_id).parameterize}-#{File.basename(binary_id)}"
    uri = URI(url)
    Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      request = Net::HTTP::Get.new(uri)
      http.request(request) do |response|
        open(File.join(dir_name, filename), "wb") do |io|
          response.read_body do |chunk|
            io.write chunk
          end
        end
      end
    end
    filename
  end

  def get_obj_ids(api)
    before_published_rev_id = api.get("workspaces/published")["revision_id"]
    continuation = nil
    ids = []
    begin
      w = api.get("workspaces/published/objs/search", "continuation" => continuation)
      ids += w["results"].map {|r| r["id"]}
    end while (continuation = w["continuation"]).present?
    after_published_rev_id = api.get("workspaces/published")["revision_id"]
    if after_published_rev_id != before_published_rev_id
      raise "published working copy has changed during obj search"
    end
    [after_published_rev_id, ids]
  end
end

# dir_name = ARGV.first or raise "missing dir_name param"
current_directory = File.dirname(__FILE__)
dir_name = File.join(current_directory, '../initialContent')

ScrivitoExport.new.export(dir_name: dir_name)
