import UserDropdown from "@/components/UserDropdown"

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 font-bold rounded-lg bg-teal-500/10 ">
      ST
    </div>
  )
}

const NavbarItem = ({ children, href, active }) => {
  return (
    <a href={href} className={`inline-flex px-2 py-1 border rounded-md hover:bg-white/5 hover:border-white/5 ${active ? 'bg-white/5 border-white/5' : 'bg-white/0 border-white/0'}`}>
      {children}
    </a>
  )
}

const Navbar = ({
  user = null,
}) => {
  return (
    <nav className="p-2">
      <div className="flex items-center justify-between p-1 border rounded-lg border-white/5">
        <div className="flex items-center gap-2">
          <div>
            <Logo />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <NavbarItem href="/" active>
              <span>Templates</span>
            </NavbarItem>
            <NavbarItem href="/about">
              <span>Conversations</span>
            </NavbarItem>
          </div>
        </div>
        <div>
          {user && <UserDropdown user={user} />}
          {!user && <a href="#">Sign in / Sign up</a>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar