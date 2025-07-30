import { PortableTextBlock } from '@portabletext/react'

export interface TableOfContentItem {
  id: string
  text: string
  level: number
}

export function extractHeadings(content: PortableTextBlock[]): TableOfContentItem[] {
  const headings: TableOfContentItem[] = []
  
  content.forEach((block, index) => {
    if (block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style || '')) {
      const text = block.children
        ?.map((child) => ('text' in child ? child.text : '') || '')
        .join('') || ''
      
      if (text.trim()) {
        headings.push({
          id: `heading-${index}`,
          text: text.trim(),
          level: parseInt(block.style?.replace('h', '') || '1', 10)
        })
      }
    }
  })
  
  return headings
}