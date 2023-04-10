import { useState } from 'react'
import Page from '@/components/Page'
import Button from '@/components/Button'
import TemplateForm from '@/components/TemplateForm'
import Link from 'next/link'

export default function Home() {
  const [icon, setIcon] = useState('🤖')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [system, setSystem] = useState('')
  const [prompt, setPrompt] = useState('')
  const [isPublic, setIsPublic] = useState(false)

  return (
    <Page>
      <section className="p-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-lg">
            <Link className="text-white/50 hover:text-white" href="/">Templates</Link>
            <span>/</span>
            <h1>New Template</h1>
          </div>
          <Button variant="primary">Save template</Button>
        </div>
        <TemplateForm
          icon={icon}
          setIcon={setIcon}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          system={system}
          setSystem={setSystem}
          prompt={prompt}
          setPrompt={setPrompt}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
        />
      </section>
    </Page>
  )
}
