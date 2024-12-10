
'use client'

import { useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [activeItem, setActiveItem] = useState('home')

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="flex justify-center items-center sticky top-3 z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`nav-item ${
              activeItem === item.name.toLowerCase()
                ? 'bg-white text-gray-900'
                : 'text-white hover:bg-white/10'
            } ${
              item.name === 'Contact'
                ? 'hover:bg-white/70 hover:text-gray-900'
                : ''
            } rounded-full px-4 py-2 transition-colors`}
            onClick={() => setActiveItem(item.name.toLowerCase())}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}


