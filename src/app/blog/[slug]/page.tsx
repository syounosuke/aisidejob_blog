import { notFound } from 'next/navigation'
import { getPost, getPosts } from '../../../lib/sanity'
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

  return <BlogPostClient post={post} />
}

export async function generateStaticParams() {
  const posts = await getPosts() || []
  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }))
}