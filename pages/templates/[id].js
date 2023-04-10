import Page from '@/components/Page'
import MessageList from '@/components/MessageList'
import TemplateSidebar from '@/components/TemplateSidebar'
import TemplateUserInput from '@/components/TemplateUserInput'

export default function Template() {
  return (
    <Page fullHeight={true}>
      <section className="flex justify-between gap-2 p-2 item-stretch" style={{ height: 'calc(100vh - 68px)' }}>
        <TemplateSidebar />
        <div className="flex flex-col justify-between flex-1 w-full">
          <div className="flex-1 overflow-auto">
            <MessageList />
          </div>
          <TemplateUserInput />
        </div>
      </section>
    </Page>
  )
}