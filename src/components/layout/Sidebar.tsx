'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutGrid,
  DollarSign,
  RefreshCw,
  Settings,
  LogOut
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Catalog Management',
    href: '/',
    icon: LayoutGrid
  },
  {
    title: 'Price Management',
    href: '/price-management',
    icon: DollarSign
  },
  {
    title: 'Sync & Integration',
    href: '/sync-integration',
    icon: RefreshCw
  },
  {
    title: 'Configuration',
    href: '/configuration',
    icon: Settings
  }
]

const Sidebar: FC = () => {
  const pathname = usePathname()

  return (
    <aside className="w-[200px] min-h-screen bg-[#2A2D37] text-white p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">E-Commerce</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#1C1E26] text-[#FF4747]'
                      : 'hover:bg-[#1C1E26] text-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 px-3 py-2 w-full text-gray-300 hover:bg-[#1C1E26] rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
        <div className="mt-4 text-xs text-gray-500 px-3">
          v1.0.0
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
