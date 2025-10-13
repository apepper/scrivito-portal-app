# Scrivito Portal App - Widget Overview

This application contains **59 widgets** organized into multiple overlapping categories.

---

## 📋 **Category Index**

Widgets are organized by their primary purpose and characteristics. Many widgets appear in multiple categories.

### Primary Categories
1. [Headline Widgets](#headline-widgets) - Heading and title elements
2. [Text-Based Widgets](#text-based-widgets) - Display text content
3. [Button Widgets](#button-widgets) - Interactive buttons and CTAs
4. [Structure Widgets](#structure-widgets) - Layout and organization
5. [Special Purpose Widgets](#special-purpose-widgets) - Specialized functionality

### Additional Categories
6. [Media Widgets](#media-widgets) - Images and videos
7. [Navigation Widgets](#navigation-widgets) - Site navigation elements
8. [Data-Driven Widgets](#data-driven-widgets) - Dynamic content from data sources
9. [Form Widgets](#form-widgets) - Form inputs and containers
10. [Container Widgets](#container-widgets) - Parent widgets that hold children
11. [Visual/Decorative Widgets](#visualdecorative-widgets) - Visual elements and spacing

---

## Headline Widgets

Widgets specifically for displaying headings and titles.

- [HeadlineWidget](src/Widgets/HeadlineWidget/HeadlineWidgetClass.ts) - Standard headlines (h1-h6, display-1 to display-6)
- [BannerHeadlineWidget](src/Widgets/BannerHeadlineWidget/BannerHeadlineWidgetClass.ts) - Banner-style headlines with backgrounds
- [PageTitleWidget](src/Widgets/PageTitleWidget/PageTitleWidgetClass.ts) - Full-width page title sections

---

## Text-Based Widgets

Widgets that primarily display text content.

- **All [Headline Widgets](#headline-widgets)** (see above)
- [TextWidget](src/Widgets/TextWidget/TextWidgetClass.ts) - Rich HTML text content with alignment options
- [DataLabelWidget](src/Widgets/DataLabelWidget/DataLabelWidgetClass.ts) - Label/value pairs from data (text, currency, datetime, link)
- [DataCountWidget](src/Widgets/DataCountWidget/DataCountWidgetClass.ts) - Numeric count display with pluralization
- [AddressWidget](src/Widgets/AddressWidget/AddressWidgetClass.ts) - Structured address with contact information
- [TickListWidget](src/Widgets/TickListWidget/TickListWidgetClass.ts) - Checkmark/bullet list container
- [TickListItemWidget](src/Widgets/TickListItemWidget/TickListItemWidgetClass.ts) - Individual list item

---

## Button Widgets

Interactive button elements for user actions.

- [ButtonWidget](src/Widgets/ButtonWidget/ButtonWidgetClass.ts) - Standard button with link, color, and size options
- [LogInButtonWidget](src/Widgets/LogInButtonWidget/LogInButtonWidgetClass.ts) - Authentication login button
- [CheckoutButtonWidget](src/Widgets/CheckoutButtonWidget/CheckoutButtonWidgetClass.ts) - E-commerce checkout button
- [DataDeleteButtonWidget](src/Widgets/DataDeleteButtonWidget/DataDeleteButtonWidgetClass.ts) - Delete button with confirmation dialog
- [DataLoadMoreButtonWidget](src/Widgets/DataLoadMoreButtonWidget/DataLoadMoreButtonWidgetClass.ts) - Pagination load more button
- [DataFormSubmitButtonWidget](src/Widgets/DataFormSubmitButtonWidget/DataFormSubmitButtonWidgetClass.ts) - Form submission button

---

## Structure Widgets

Widgets that provide layout structure and organization.

- [SectionWidget](src/Widgets/SectionWidget/SectionWidgetClass.ts) - Full-width page section with background and padding
- [ColumnContainerWidget](src/Widgets/ColumnContainerWidget/ColumnContainerWidgetClass.ts) - Grid/flex column layout system
- [ColumnWidget](src/Widgets/ColumnWidget/ColumnWidgetClass.ts) - Individual column within container
- [CardWidget](src/Widgets/CardWidget/CardWidgetClass.ts) - Card with header, body, footer sections
- [GroupWidget](src/Widgets/GroupWidget/GroupWidgetClass.ts) - Generic widget grouping container
- [DataWidget](src/Widgets/DataWidget/DataWidgetClass.ts) - Data scope container for child widgets
- [DataGroupWidget](src/Widgets/DataGroupWidget/DataGroupWidgetClass.ts) - Nested data scope grouping
- [DataFormContainerWidget](src/Widgets/DataFormContainerWidget/DataFormContainerWidgetClass.ts) - Form structure and submission handler

---

## Special Purpose Widgets

Widgets with specialized, unique functionality.

- [AddressWidget](src/Widgets/AddressWidget/AddressWidgetClass.ts) - Structured address display with semantic markup
- [ProductParameterWidget](src/Widgets/ProductParameterWidget/ProductParameterWidgetClass.ts) - E-commerce product variant parameters
- [LogoWidget](src/Widgets/LogoWidget/LogoWidgetClass.ts) - Brand logo display
- [LanguageSwitchWidget](src/Widgets/LanguageSwitchWidget/LanguageSwitchWidgetClass.ts) - Multi-language selector
- [DataSearchWidget](src/Widgets/DataSearchWidget/DataSearchWidgetClass.ts) - Search input with URL parameter binding
- [DataAttachmentsWidget](src/Widgets/DataAttachmentsWidget/DataAttachmentsWidgetClass.ts) - File attachments list display
- [DataIconConditionWidget](src/Widgets/DataIconConditionWidget/DataIconConditionWidgetClass.ts) - Conditional icon mapping rules
- [DataEmptyWidget](src/Widgets/DataEmptyWidget/DataEmptyWidgetClass.ts) - Conditional renderer for empty data states
- [DataMessageWidget](src/Widgets/DataMessageWidget/DataMessageWidgetClass.ts) - State-based message display
- [DataFormHiddenFieldWidget](src/Widgets/DataFormHiddenFieldWidget/DataFormHiddenFieldWidgetClass.ts) - Hidden form field values
- [DownloadCardWidget](src/Widgets/DownloadCardWidget/DownloadCardWidgetClass.ts) - Downloadable resource card
- [DataPersonCardWidget](src/Widgets/DataPersonCardWidget/DataPersonCardWidgetClass.ts) - Person profile card with data binding
- [HomepageFooterWidget](src/Widgets/HomepageFooterWidget/HomepageFooterWidgetClass.ts) - Site footer structure
- [DataColumnListWidget](src/Widgets/DataColumnListWidget/DataColumnListWidgetClass.ts) - Data displayed in column layout

---

## Media Widgets

Widgets for displaying images and videos.

- [ImageWidget](src/Widgets/ImageWidget/ImageWidgetClass.ts) - Image display with sizing, alignment, and optional link
- [DataImageWidget](src/Widgets/DataImageWidget/DataImageWidgetClass.ts) - Dynamic image from data source
- [IconWidget](src/Widgets/IconWidget/IconWidgetClass.ts) - Bootstrap icons with sizing and alignment
- [DataIconWidget](src/Widgets/DataIconWidget/DataIconWidgetClass.ts) - Conditional icon display based on data values
- [VimeoVideoWidget](src/Widgets/VimeoVideoWidget/VimeoVideoWidgetClass.ts) - Vimeo video embed with aspect ratio control
- [YoutubeVideoWidget](src/Widgets/YoutubeVideoWidget/YoutubeVideoWidgetClass.ts) - YouTube video embed with aspect ratio control
- [SliderWidget](src/Widgets/SliderWidget/SliderWidgetClass.ts) - Carousel/slider for multiple slides
- [SlideWidget](src/Widgets/SlideWidget/SlideWidgetClass.ts) - Individual carousel slide

---

## Navigation Widgets

Widgets for site navigation and wayfinding.

- [TopNavigationWidget](src/Widgets/TopNavigationWidget/TopNavigationWidgetClass.ts) - Main top navigation bar
- [VerticalNavigationWidget](src/Widgets/VerticalNavigationWidget/VerticalNavigationWidgetClass.ts) - Sidebar navigation menu
- [BreadcrumbWidget](src/Widgets/BreadcrumbWidget/BreadcrumbWidgetClass.ts) - Static breadcrumb navigation trail
- [DataBreadcrumbWidget](src/Widgets/DataBreadcrumbWidget/DataBreadcrumbWidgetClass.ts) - Dynamic breadcrumb with data binding
- [LinkWidget](src/Widgets/LinkWidget/LinkWidgetClass.ts) - Individual link (used in LinkContainerWidget)
- [LinkContainerWidget](src/Widgets/LinkContainerWidget/LinkContainerWidgetClass.ts) - Container for multiple links
- [LanguageSwitchWidget](src/Widgets/LanguageSwitchWidget/LanguageSwitchWidget Class.ts) - Language selector
- [LogoWidget](src/Widgets/LogoWidget/LogoWidgetClass.ts) - Brand logo (typically links to homepage)
- [HomepageFooterWidget](src/Widgets/HomepageFooterWidget/HomepageFooterWidgetClass.ts) - Footer with navigation links

---

## Data-Driven Widgets

Widgets that bind to backend data sources using \`datalocator\` attribute.

### Data Context & Logic
- [DataWidget](src/Widgets/DataWidget/DataWidgetClass.ts) - Primary data scope container
- [DataGroupWidget](src/Widgets/DataGroupWidget/DataGroupWidgetClass.ts) - Nested data scope
- [DataEmptyWidget](src/Widgets/DataEmptyWidget/DataEmptyWidgetClass.ts) - Conditional display when data is empty
- [DataMessageWidget](src/Widgets/DataMessageWidget/DataMessageWidgetClass.ts) - State-based messages

### Data Display
- [DataLabelWidget](src/Widgets/DataLabelWidget/DataLabelWidgetClass.ts) - Label/value pairs (text, currency, datetime, link)
- [DataCountWidget](src/Widgets/DataCountWidget/DataCountWidgetClass.ts) - Numeric counts with pluralization
- [DataImageWidget](src/Widgets/DataImageWidget/DataImageWidgetClass.ts) - Images from data source
- [DataIconWidget](src/Widgets/DataIconWidget/DataIconWidgetClass.ts) - Conditional icons
- [DataIconConditionWidget](src/Widgets/DataIconConditionWidget/DataIconConditionWidgetClass.ts) - Icon mapping rules
- [DataAttachmentsWidget](src/Widgets/DataAttachmentsWidget/DataAttachmentsWidgetClass.ts) - File attachments
- [DataColumnListWidget](src/Widgets/DataColumnListWidget/DataColumnListWidgetClass.ts) - Column layout data
- [DataPersonCardWidget](src/Widgets/DataPersonCardWidget/DataPersonCardWidgetClass.ts) - Person profile cards
- [DataBreadcrumbWidget](src/Widgets/DataBreadcrumbWidget/DataBreadcrumbWidgetClass.ts) - Dynamic breadcrumbs

### Data Actions
- [DataSearchWidget](src/Widgets/DataSearchWidget/DataSearchWidgetClass.ts) - Search input
- [DataLoadMoreButtonWidget](src/Widgets/DataLoadMoreButtonWidget/DataLoadMoreButtonWidgetClass.ts) - Pagination
- [DataDeleteButtonWidget](src/Widgets/DataDeleteButtonWidget/DataDeleteButtonWidgetClass.ts) - Delete actions

### Data Forms
- [DataFormContainerWidget](src/Widgets/DataFormContainerWidget/DataFormContainerWidgetClass.ts) - Form handler
- [DataFormInputFieldWidget](src/Widgets/DataFormInputFieldWidget/DataFormInputFieldWidgetClass.ts) - Text inputs
- [DataFormBooleanWidget](src/Widgets/DataFormBooleanWidget/DataFormBooleanWidgetClass.ts) - Checkboxes
- [DataFormNumberWidget](src/Widgets/DataFormNumberWidget/DataFormNumberWidgetClass.ts) - Number inputs
- [DataFormOptionsWidget](src/Widgets/DataFormOptionsWidget/DataFormOptionsWidgetClass.ts) - Select dropdowns
- [DataFormUploadWidget](src/Widgets/DataFormUploadWidget/DataFormUploadWidgetClass.ts) - File uploads
- [DataFormHiddenFieldWidget](src/Widgets/DataFormHiddenFieldWidget/DataFormHiddenFieldWidgetClass.ts) - Hidden fields
- [DataFormSubmitButtonWidget](src/Widgets/DataFormSubmitButtonWidget/DataFormSubmitButtonWidgetClass.ts) - Submit buttons

---

## Form Widgets

Widgets for creating forms and handling user input.

### Form Container
- [DataFormContainerWidget](src/Widgets/DataFormContainerWidget/DataFormContainerWidgetClass.ts) - Form submission handler with validation and redirects

### Form Input Fields
- [DataFormInputFieldWidget](src/Widgets/DataFormInputFieldWidget/DataFormInputFieldWidgetClass.ts) - Text input (single-line, email, phone, multi-line)
- [DataFormBooleanWidget](src/Widgets/DataFormBooleanWidget/DataFormBooleanWidgetClass.ts) - Checkbox/toggle
- [DataFormNumberWidget](src/Widgets/DataFormNumberWidget/DataFormNumberWidgetClass.ts) - Number input with min/max/step
- [DataFormOptionsWidget](src/Widgets/DataFormOptionsWidget/DataFormOptionsWidgetClass.ts) - Select dropdown
- [DataFormUploadWidget](src/Widgets/DataFormUploadWidget/DataFormUploadWidgetClass.ts) - File upload
- [DataFormHiddenFieldWidget](src/Widgets/DataFormHiddenFieldWidget/DataFormHiddenFieldWidgetClass.ts) - Hidden field values

### Form Actions
- [DataFormSubmitButtonWidget](src/Widgets/DataFormSubmitButtonWidget/DataFormSubmitButtonWidgetClass.ts) - Submit button

---

## Container Widgets

Widgets that hold and organize child widgets.

### Layout Containers
- [SectionWidget](src/Widgets/SectionWidget/SectionWidgetClass.ts) - Page section with background
- [ColumnContainerWidget](src/Widgets/ColumnContainerWidget/ColumnContainerWidgetClass.ts) - Grid/flex columns
- [CardWidget](src/Widgets/CardWidget/CardWidgetClass.ts) - Card with body/footer
- [GroupWidget](src/Widgets/GroupWidget/GroupWidgetClass.ts) - Generic grouping

### Specialized Containers
- [SliderWidget](src/Widgets/SliderWidget/SliderWidgetClass.ts) - Carousel for slides
- [TickListWidget](src/Widgets/TickListWidget/TickListWidgetClass.ts) - List for tick items
- [LinkContainerWidget](src/Widgets/LinkContainerWidget/LinkContainerWidgetClass.ts) - Link collection
- [IconContainerWidget](src/Widgets/IconContainerWidget/IconContainerWidgetClass.ts) - Icon collection
- [BannerHeadlineContainerWidget](src/Widgets/BannerHeadlineContainerWidget/BannerHeadlineContainerWidgetClass.ts) - Banner headline holder

### Data Containers
- [DataWidget](src/Widgets/DataWidget/DataWidgetClass.ts) - Data scope provider
- [DataGroupWidget](src/Widgets/DataGroupWidget/DataGroupWidgetClass.ts) - Nested data scope
- [DataFormContainerWidget](src/Widgets/DataFormContainerWidget/DataFormContainerWidgetClass.ts) - Form handler
- [DataEmptyWidget](src/Widgets/DataEmptyWidget/DataEmptyWidgetClass.ts) - Conditional content

### Child-Only Widgets
These widgets can only exist inside specific parent containers:
- [ColumnWidget](src/Widgets/ColumnWidget/ColumnWidgetClass.ts) - Only in ColumnContainerWidget
- [SlideWidget](src/Widgets/SlideWidget/SlideWidgetClass.ts) - Only in SliderWidget
- [TickListItemWidget](src/Widgets/TickListItemWidget/TickListItemWidgetClass.ts) - Only in TickListWidget
- [LinkWidget](src/Widgets/LinkWidget/LinkWidgetClass.ts) - Only in LinkContainerWidget
- [BannerHeadlineWidget](src/Widgets/BannerHeadlineWidget/BannerHeadlineWidgetClass.ts) - Only in BannerHeadlineContainerWidget

---

## Visual/Decorative Widgets

Widgets for visual styling, spacing, and decoration.

- [DividerWidget](src/Widgets/DividerWidget/DividerWidgetClass.ts) - Horizontal divider line
- [SpaceWidget](src/Widgets/SpaceWidget/SpaceWidgetClass.ts) - Vertical spacing control
- [IconWidget](src/Widgets/IconWidget/IconWidgetClass.ts) - Bootstrap icon display
- [DataIconWidget](src/Widgets/DataIconWidget/DataIconWidgetClass.ts) - Conditional icons
- [ImageWidget](src/Widgets/ImageWidget/ImageWidgetClass.ts) - Decorative or content images
- [LogoWidget](src/Widgets/LogoWidget/LogoWidgetClass.ts) - Brand logo

---

## Key Patterns & Architecture

### Widget Type Distribution
- **59 total widgets**
- **Data-driven widgets**: 23 widgets (39%)
- **Container widgets**: 15 widgets (25%)
- **Form widgets**: 7 widgets (12%)
- **Button widgets**: 6 widgets (10%)
- **Headline widgets**: 4 widgets (7%)

### Design Patterns

**Container/Item Pattern**: Many widgets follow a parent-child architecture
- ColumnContainer → Column
- Slider → Slide
- TickList → TickListItem
- LinkContainer → Link
- BannerHeadlineContainer → BannerHeadline

**Data-Driven Architecture**: Heavy use of \`datalocator\` attribute for backend binding
- 23 widgets with "Data" prefix
- Centralized data context via DataWidget
- Conditional rendering (DataEmptyWidget, DataMessageWidget)

**Nested Widget Restrictions**: Several widgets use \`onlyInside\` constraint
- Enforces proper parent-child relationships
- Prevents misuse of child widgets
- Examples: ColumnWidget, LinkWidget, SlideWidget

**Styling Attributes**: Common styling patterns across widgets
- \`paddingAttributes\` - spacing control
- \`textStyleAttributes\` - typography
- \`borderRadiusAttributes\` - rounded corners
- \`bordersAttributes\` - border styling
- Background colors and images
- Alignment options

**Form Integration**: Leverages \`scrivito-neoletter-form-widgets\` library for extended form capabilities
