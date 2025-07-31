import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { Post } from '@/types/sanity'

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  // デバッグ用ログ
  console.log('RelatedPosts component - posts:', posts)
  console.log('RelatedPosts component - posts length:', posts?.length || 0)
  
  if (!posts || posts.length === 0) {
    console.log('RelatedPosts: No posts to display')
    return (
      <section className="mt-16 pt-8 border-t border-gray-200">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">関連記事</h3>
          <p className="text-gray-600">
            関連記事はありません
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">関連記事</h3>
        <p className="text-gray-600">
          同じカテゴリの記事をご紹介します
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          すべての記事を見る
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}