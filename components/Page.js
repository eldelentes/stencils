import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/NavBar'

const Page = ({
  children,
  user = null,
  fullHeight = false,
}) => {
  return (
    <main className={`text-sm bg-stone-950 text-stone-50 antialiased ${inter.className} flex flex-col ${fullHeight ? 'h-screen' : 'min-h-screen '}`}>
      <Navbar user={user} />
      <div className="flex flex-col flex-1">
        {children}
      </div>
    </main>
  )
}

export default Page