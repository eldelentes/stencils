import Page from '@/components/Page'
import Tabs from '@/components/Tabs'
import TemplatesGrid from '@/components/TemplatesGrid'

export default function Home() {
  return (
    <Page>
      <section className="p-2">
        <Tabs />
        <TemplatesGrid />
      </section>
    </Page>
  )
}
