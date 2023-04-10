import { useState } from "react"
import Page from "@/components/Page"
import Button from "@/components/Button"
import Link from "next/link"
import TextInput from "@/components/TextInput"
import Label from "@/components/Label"

const SettingsPge = () => {
  const [openAIKey, setOpenAIKey] = useState('')
  return (
    <Page>
      <section className="p-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-lg">
            <Link className="text-white/50 hover:text-white" href="/">Home</Link>
            <span>/</span>
            <h1>Settings</h1>
          </div>
          <Button variant="primary">Save settings</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <article className="border divide-y rounded-lg border-white/10 divide-white/10 bg-white/5">
            <div className="p-4">
              <Label spacing={false}>Open AI Key</Label>
              <div className="p-2 mb-2 rounded-lg bg-white/5">
                <p>You need an OpenAI API Key to use stencils.</p>
                <p>Your API Key is stored locally on your browser and never sent anywhere else.</p>
              </div>
              <TextInput placeholder="Open Ai Key" value={openAIKey} onChange={e => setOpenAIKey(e.target.value)} />
            </div>
          </article>
          <article className="border divide-y rounded-lg border-white/10 divide-white/10 bg-white/5">
            <div className="p-4">
              <Label spacing={false}>Current plan</Label>
            </div>
          </article>
        </div>
      </section>
    </Page>
  )
}

export default SettingsPge