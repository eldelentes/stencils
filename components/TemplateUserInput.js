import Button from '@/components/Button'
import TextArea from '@/components/TextArea'

const TemplateUserInput = () => {
  return (
    <div className="flex items-start gap-2">
      <TextArea placeholder="Template name" />
      <Button variant="primary">Send</Button>
    </div>
  )
}

export default TemplateUserInput