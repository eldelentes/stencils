import TemplateCard from '@/components/TemplateCard'

const TemplatesGrid = ({ templates = [] }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
      <TemplateCard />
    </div>
  )
}

export default TemplatesGrid