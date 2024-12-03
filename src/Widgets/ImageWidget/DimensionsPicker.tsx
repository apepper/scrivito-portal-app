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
      Dimensions picker
    </div>
  )
})
