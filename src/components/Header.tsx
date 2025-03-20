import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 sticky top-0 z-96 bg-black text-white">
        <div>
          <Link href="/" className="flex gap-3 items-center">
          <Image className="rounded-full" src="/logo.jpeg" width={40} height={40} alt="logo" />
          <h1 className="font-bold text-2xl">Open Play Games</h1>
          </Link>
        </div>
        <div>
            <Link href="https://instagram.com/openplay.studio" className="text-2xl">
            <FaInstagram />
            </Link>
        </div>
      </nav>
  )
}

export default Header
