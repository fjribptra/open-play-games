import React from 'react'
import Link  from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 sticky">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* <Gamepad2 className="h-8 w-8 text-purple-500" /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Open Play Games
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Your ultimate destination for browser-based games. Play hundreds of free games across various categories.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <Twitter className="h-5 w-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <Facebook className="h-5 w-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <Instagram className="h-5 w-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <Github className="h-5 w-5" /> */}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/?category=action" className="text-gray-400 hover:text-white transition-colors">
                  Action Games
                </Link>
              </li>
              <li>
                <Link href="/?category=puzzle" className="text-gray-400 hover:text-white transition-colors">
                  Puzzle Games
                </Link>
              </li>
              <li>
                <Link href="/?category=strategy" className="text-gray-400 hover:text-white transition-colors">
                  Strategy Games
                </Link>
              </li>
              <li>
                <Link href="/?category=arcade" className="text-gray-400 hover:text-white transition-colors">
                  Arcade Games
                </Link>
              </li>
              <li>
                <Link href="/?category=adventure" className="text-gray-400 hover:text-white transition-colors">
                  Adventure Games
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/popular" className="text-gray-400 hover:text-white transition-colors">
                  Popular Games
                </Link>
              </li>
              <li>
                <Link href="/new" className="text-gray-400 hover:text-white transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/top-rated" className="text-gray-400 hover:text-white transition-colors">
                  Top Rated
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-gray-400 hover:text-white transition-colors">
                  Featured Games
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Open Play Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
