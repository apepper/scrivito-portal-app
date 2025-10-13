import { Widget } from 'scrivito'
import fakeBorderRadiusEditor from './BorderRadiusEditor/fake-border-radius-editor.png'

export function BorderRadiusEditor({ widget: _widget }: { widget?: Widget }) {
  return (
    <div style={{ backgroundColor: '#212121', padding: '8px' }}>
      <img src={fakeBorderRadiusEditor} alt="" />
    </div>
  )
}
