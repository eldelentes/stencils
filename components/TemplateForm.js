import TextArea from '@/components/TextArea'
import TextInput from '@/components/TextInput'
import Label from '@/components/Label'

const TemplateForm = ({ icon, setIcon, name, setName, description, setDescription, system, setSystem, prompt, setPrompt, isPublic, setIsPublic }) => {
  return(
    <div className="grid items-start grid-cols-2 gap-4">
      <article className="border divide-y rounded-lg border-white/10 divide-white/10 bg-white/5">
        <div className="p-4">
          <Label>Template name</Label>
          <TextInput placeholder="Template name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="p-4">
          <Label>Template description</Label>
          <TextArea placeholder="Template description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="p-4">
          <Label>Public template</Label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer bg-white/5 border-white/10">
              <div>
                <h2>Public</h2>
                <small className="block text-sm text-gray-400">Anyone can see this template</small>
              </div>
              <input type="radio" name="public" value="public" id="public" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} />
            </label>
            <label className="flex items-center justify-between p-4 border rounded-md cursor-pointer bg-white/5 border-white/10">
              <div>
                <h2>Private</h2>
                <small className="block text-sm text-gray-400">Only you can see this template</small>
              </div>
              <input type="radio" name="public" value="private" id="private" checked={!isPublic} onChange={e => setIsPublic(!e.target.checked)} />
            </label>
          </div>
        </div>
      </article>
      <article className="border divide-y rounded-lg border-white/10 divide-white/10 bg-white/5">
        <div className="p-4">
          <Label spacing={false}>Template system</Label>
          <small className="block mb-1">How it would act in the conversation. Specific format, instructions or context </small>
          <TextArea placeholder="Template description" value={system} onChange={e => setSystem(e.target.value)} />
        </div>
        <div className="p-4">
          <Label spacing={false}>Template prompt</Label>
          <small className="block mb-1">Prompt of the generator. Use {"{}"} for simple text inputs or {"{{}}"} for textarea inputs.</small>
          <TextArea placeholder="Template prompt" value={prompt} onChange={e => setPrompt(e.target.value)} />
        </div>
      </article>
    </div>
  )
}

export default TemplateForm