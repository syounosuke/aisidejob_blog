'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-indigo-900/95 backdrop-blur-sm shadow-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black text-white hover:text-yellow-300 transition-colors tracking-wide">
              <span className="font-mono">Syounosuke</span>
              <span className="text-yellow-300 ml-1 font-sans">AI</span>
              <span className="text-gray-300 font-light">blog</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
              ホーム
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
              ブログ
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
              プロフィール
            </Link>
            <a href="https://twitter.com/intent/tweet?screen_name=syounosuke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
              お問合せ
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
                ホーム
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
                ブログ
              </Link>
              <Link href="/profile" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
                プロフィール
              </Link>
              <a href="https://twitter.com/intent/tweet?screen_name=syounosuke" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-colors font-medium">
                お問合せ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}