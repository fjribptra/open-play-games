import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-5 border-b sticky top-0 z-50 bg-white">
        <div className="flex gap-3 items-center">
          <Image className="rounded-full" src="/logo.jpeg" width={40} height={40} alt="logo" />
          <h1 className="font-bold text-2xl">Open Play Games</h1>
        </div>
        <div>

        </div>
      </nav>
  )
}

export default Header
