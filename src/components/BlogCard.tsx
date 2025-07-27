import Image from "next/image"
import Link from "next/link"
import { Post } from "../types/sanity"
import { urlFor } from "../lib/sanity"

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.imageUrl).width(400).height(200).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories && post.categories.map((category) => (
            <span 
              key={category}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <Link 
            href={`/blog/${post.slug.current}`}
            className="hover:text-blue-600 transition-colors line-clamp-2 block"
          >
            {post.title}
          </Link>
        </h3>
        
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.publishedAt}>
            {publishedDate}
          </time>
          
          <div className="flex flex-wrap gap-1">
            {post.tags && post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-gray-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}