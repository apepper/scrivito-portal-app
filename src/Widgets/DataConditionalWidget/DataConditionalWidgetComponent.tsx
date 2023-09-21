import {
  ContentTag,
  isInPlaceEditingActive,
  provideComponent,
  useDataLocator,
} from 'scrivito'
import { DataConditionalWidget } from './DataConditionalWidgetClass'

provideComponent(DataConditionalWidget, ({ widget }) => {
  const data = widget.get('data')
  const dataScope = useDataLocator(data)

  return (
    <>
      {isInPlaceEditingActive() && (
        <div className="alert alert-warning d-flex m-auto">
          <i className="bi bi-exclamation-circle bi-2x" aria-hidden="true"></i>
          <div className="my-auto mx-2">
            <b>Editor note:</b> The following is only visible if
            &quot;data&quot; contains data.
          </div>
        </div>
      )}
      {(isInPlaceEditingActive() || dataScope.containsData()) && (
        <ContentTag content={widget} attribute="trueBody" />
      )}
      {isInPlaceEditingActive() && (
        <div className="alert alert-warning d-flex m-auto">
          <i className="bi bi-exclamation-circle bi-2x" aria-hidden="true"></i>
          <div className="my-auto mx-2">
            <b>Editor note:</b> The following is only visible if
            &quot;data&quot; does not contains data.
          </div>
        </div>
      )}
      {(isInPlaceEditingActive() || !dataScope.containsData()) && (
        <ContentTag content={widget} attribute="falseBody" />
      )}
    </>
  )
})
