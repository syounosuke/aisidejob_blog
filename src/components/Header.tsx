'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              祥之助
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ホーム
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              ブログ
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
              プロフィール
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              お問い合わせ
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                ホーム
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                ブログ
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
                プロフィール
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}