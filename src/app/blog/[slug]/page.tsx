import { notFound } from 'next/navigation'
import { getPost, getPosts, getRelatedPosts } from '../../../lib/sanity'
import { Post } from '../../../types/sanity'
import BlogPostClient from '@/components/BlogPostClient'

interface Props {
  params: Promise<{ slug: string }>
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