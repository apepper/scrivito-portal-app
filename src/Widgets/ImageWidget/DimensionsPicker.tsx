import { connect, uiContext } from 'scrivito'
import { ImageWidgetInstance } from './ImageWidgetClass'
import './DimensionsPicker.scss'

export const DimensionsPicker = connect(function DimensionsPicker({
  widget,
}: {
  widget: ImageWidgetInstance
}) {
  const { theme } = uiContext() || { theme: null }
  if (!theme) return null

  return (
    <div
      className={`dimensions-picker scrivito_detail_content scrivito_${theme}`}
    >
      <div className="row">
        <div className="col-6">
          <div className="scrivito_detail_label">
            <span>Width</span>
          </div>

          <div className="item_content">
            <div className="input_group">
              <input type="number" min="0" max="100" placeholder="100" />

              <select>
                <option value="pixel">px</option>
                <option value="percent">% </option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="scrivito_detail_label">
            <span>Height</span>
          </div>

          <div className="item_content">
            <div className="input_group">
              <input type="number" min="0" max="33000000" placeholder="100" />
              <span className="input_group_text">px</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scrivito_detail_label">
        <span>Object fit</span>
      </div>
      <div className="item_content">
        <ul className="enum_attribute">
          <li
            className="enum_attribute_active"
            title="Image is scaled to maintain its aspect ratio while fitting within the element's content box."
          >
            <div className="attribute-preview contain"></div>
            <span>Contain</span>
          </li>
          <li title="Image is sized to maintain its aspect ratio while filling the element's entire content box. The Image will be clipped to fit.">
            <div class="attribute-preview cover"></div>
            <span>Cover</span>
          </li>
          <li title="Image is sized to fill the element's content box. If necessary, the image will be stretched or squished to fit.">
            <div class="attribute-preview fill"></div>
            <span>Fill</span>
          </li>
          <li title="The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.">
            <div class="attribute-preview scale-down"></div>
            <span>Scale Down</span>
          </li>
          <li title="The replaced content is not resized.">
            <div class="attribute-preview none"></div>
            <span>None</span>
          </li>
        </ul>
      </div>
    </div>
  )
})
