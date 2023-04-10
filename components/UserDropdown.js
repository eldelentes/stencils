import { useState } from 'react'
import Avatar from '@/components/Avatar'
import { IconSettings, IconLogout } from '@tabler/icons-react'

import { IconChevronDown } from '@tabler/icons-react'
const UserDropdown = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button className="flex items-center gap-1 p-1 border border-transparent rounded-lg hover:bg-white/5 hover:border-white/5" onClick={() => setIsOpen(!isOpen)}>
        <Avatar size="sm" initials="EH" />
        <IconChevronDown size={18} />
      </button>
      {isOpen && (
        <div className="absolute right-0 flex flex-col border rounded-lg bg-stone-900 border-white/5">
          <a className="inline-flex justify-center gap-1 p-3 text-sm hover:bg-white/5" href="#">
            <IconSettings size={18} />
            <span>Settings</span>
          </a>
          <a className="inline-flex justify-center gap-1 p-3 text-sm hover:bg-white/5" href="#">
            <IconLogout size={18} />
            <span>Logout</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default UserDropdown