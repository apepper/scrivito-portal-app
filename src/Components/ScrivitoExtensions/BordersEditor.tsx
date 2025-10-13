import { Widget } from 'scrivito'
import fakeBordersEditor from './BordersEditor/fake-borders-editor.png'

export function BordersEditor({ widget: _widget }: { widget?: Widget }) {
  return (
    <div style={{ backgroundColor: '#212121', padding: '8px' }}>
      <img src={fakeBordersEditor} alt="" />
    </div>
  )
}
