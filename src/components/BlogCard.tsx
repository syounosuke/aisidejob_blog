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
    <Link href={`/blog/${post.slug.current}`} className="block relative z-10">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gold/20 japanese-pattern group">
        {post.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={urlFor(post.imageUrl).width(400).height(200).url()}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories && post.categories.map((category) => (
              <span 
                key={category}
                className="px-2 py-1 bg-gold/20 text-xs rounded-full" style={{color: 'var(--primary-blue)'}}
              >
                {category}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors" style={{color: 'var(--primary-blue)'}}>
            {post.title}
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
    </Link>
  )
}