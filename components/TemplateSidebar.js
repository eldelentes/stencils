import TextInput from '@/components/TextInput'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import TextArea from '@/components/TextArea'

const TemplateSidebar = ({ template }) => {
  return (
    <aside className="w-full max-w-xs border rounded-lg border-white/5 bg-white/5">
      <div className="flex items-center gap-2 p-2 border-b border-white/5">
        <Icon content="🤖" />
        <h1>Template name</h1>
      </div>
      <div className="p-2">
        <div className="p-2 text-xs rounded-lg bg-white/5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="divide-y divide-white/5">
        <div className="p-2">
          <TextInput placeholder="Template name" />
        </div>
        <div className="p-2">
          <TextInput placeholder="Template name" />
        </div>
      </div>
      <div className="p-2">
        <Button fullSize={true} variant="primary">Generate</Button>
      </div>
    </aside>
  )
}

export default TemplateSidebar