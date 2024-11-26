'use client'

import { FC } from 'react'
import { Search, Bell, User } from 'lucide-react'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF4747] focus:ring-1 focus:ring-[#FF4747]"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF4747] rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/200"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <User className="w-5 h-5 text-gray-400 md:hidden" />
        </div>
      </div>
    </header>
  )
}

export default Header
