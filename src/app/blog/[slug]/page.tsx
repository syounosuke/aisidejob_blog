import { notFound } from 'next/navigation'
import { getPost, getPosts, getRelatedPosts } from '../../../lib/sanity'
import { Post } from '../../../types/sanity'
import BlogPostClient from '@/components/BlogPostClient'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: '記事が見つかりません',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'
  const postUrl = `${baseUrl}/blog/${post.slug.current}`
  
  return {
    title: post.title,
    description: post.excerpt || `${post.title}について詳しく解説しています。`,
    keywords: post.tags || [],
    authors: [{ name: "祥之助" }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt || `${post.title}について詳しく解説しています。`,
      url: postUrl,
      siteName: '祥之助のAIブログ',
      locale: 'ja_JP',
      images: post.imageUrl ? [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: '/アイコン.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ['祥之助'],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `${post.title}について詳しく解説しています。`,
      creator: '@syounosukeblog',
      images: post.imageUrl ? [post.imageUrl] : ['/アイコン.webp'],
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  // 関連記事を取得
  const relatedPosts = await getRelatedPosts(post.categoryRefs || [], slug)
  
  // デバッグ用ログ
  console.log('Post categories:', post.categories)
  console.log('Post categoryRefs:', post.categoryRefs)
  console.log('Related posts count:', relatedPosts?.length || 0)
  console.log('Related posts:', relatedPosts)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}

export async function generateStaticParams() {
  const posts = await getPosts() || []
  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }))
}