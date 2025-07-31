import { getPosts } from '@/lib/sanity'
import { Post } from '@/types/sanity'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'
  
  try {
    // 全記事を取得
    const posts = await getPosts() || []
    
    // 記事ページのサイトマップエントリを生成
    const postEntries = posts.map((post: Post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    // 静的ページのサイトマップエントリ
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/profile`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
    ]

    return [...staticPages, ...postEntries]
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    
    // エラー時は静的ページのみ返す
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/profile`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
    ]
  }
}