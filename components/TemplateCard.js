import Link from 'next/link'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const TemplateCard = ({ template }) => {
  return (
    <article className="w-full p-2 border rounded-lg border-white/5 bg-white/5">
      <div className="pb-4 space-y-1">
        <Icon content={"🤖"} />
        <h1>Domain generator</h1>
        <p className="text-white/40">Generate domain names with a single click</p>
      </div> 
      <Button as={Link} href="#">Use template</Button>
    </article>
  )
}

export default TemplateCard