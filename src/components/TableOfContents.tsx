'use client'

import { useState, useEffect } from 'react'
import { TableOfContentItem } from '@/lib/extractHeadings'

interface TableOfContentsProps {
  headings: TableOfContentItem[]
  isOpen: boolean
  onToggle: () => void
}

export default function TableOfContents({ headings, isOpen, onToggle }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean)

      const currentHeading = headingElements.find(element => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 0
      })

      if (currentHeading) {
        setActiveId(currentHeading.id)
      }
    }

    if (isOpen) {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings, isOpen])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isOpen || headings.length === 0) return null

  return (
    <div className="fixed top-20 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900">目次</h3>
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full text-sm hover:text-blue-600 transition-colors ${
                  activeId === heading.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}