import { PortableTextBlock } from '@portabletext/types'

/**
 * PortableTextから純粋なテキストを抽出する関数
 */
export function extractPlainText(content: PortableTextBlock[]): string {
  if (!content || content.length === 0) return ''
  
  return content
    .filter(block => block._type === 'block')
    .map(block => {
      if (!block.children) return ''
      return block.children
        .map(child => ('text' in child ? child.text : ''))
        .join('')
    })
    .join(' ')
    .replace(/\s+/g, ' ') // 複数の空白を1つに
    .trim()
}

/**
 * Meta Titleを自動生成する関数
 * - 手動設定がある場合はそれを使用
 * - ない場合は記事タイトルをベースに生成
 */
export function generateMetaTitle(title: string, customMetaTitle?: string): string {
  if (customMetaTitle && customMetaTitle.trim()) {
    return customMetaTitle.trim()
  }
  
  // SEO最適化: 60文字以内に調整
  const siteName = 'AIサイドジョブブログ'
  const maxLength = 60
  
  if (title.length + siteName.length + 3 <= maxLength) {
    return `${title} | ${siteName}`
  }
  
  const availableLength = maxLength - siteName.length - 6 // " | " + "..."
  if (title.length > availableLength) {
    return `${title.substring(0, availableLength).trim()}... | ${siteName}`
  }
  
  return `${title} | ${siteName}`
}

/**
 * Meta Descriptionを自動生成する関数
 * - 手動設定がある場合はそれを使用
 * - ない場合は記事のexcerptまたは本文冒頭から生成
 */
export function generateMetaDescription(
  content: PortableTextBlock[], 
  excerpt?: string, 
  customMetaDescription?: string
): string {
  if (customMetaDescription && customMetaDescription.trim()) {
    return customMetaDescription.trim()
  }
  
  // excerptが設定されている場合はそれを優先
  let description = excerpt || extractPlainText(content)
  
  if (!description) {
    return 'AIサイドジョブに関する有益な情報をお届けします。'
  }
  
  // SEO最適化: 155文字以内に調整
  const maxLength = 155
  
  if (description.length <= maxLength) {
    return description
  }
  
  // 単語の境界で切り取る
  let truncated = description.substring(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  
  if (lastSpace > maxLength * 0.8) { // 80%以上の位置に空白がある場合
    truncated = truncated.substring(0, lastSpace)
  }
  
  return `${truncated.trim()}...`
}

/**
 * SEOメタデータの総合生成関数
 */
export function generateSeoMetadata(
  title: string,
  content: PortableTextBlock[],
  excerpt?: string,
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
) {
  return {
    title: generateMetaTitle(title, seo?.metaTitle),
    description: generateMetaDescription(content, excerpt, seo?.metaDescription)
  }
}