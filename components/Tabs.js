import Link from 'next/link'
import Button from '@/components/Button'

const TabItem = ({ children, href, active }) => {
  const activeClass = active ? 'border-teal-500' : 'border-white/5 text-white/70'
  return (
    <Link href={href}  className={`flex-shrink-0 px-3 py-2 border-b hover:border-teal-500 hover:text-white ${activeClass}`}>
      {children}
    </Link>
  )
}

const Tabs = () => {
  return (
    <nav className="flex items-stretch mb-4">
      <TabItem href="#" active>My templates</TabItem>
      <TabItem href="#">Templates gallery</TabItem>
      <div className="flex justify-end w-full pb-2 border-b border-white/5">
        <Button as={Link} href="/templates/new" variant="primary">New template</Button>
      </div>
    </nav>
  )
}

export default Tabs