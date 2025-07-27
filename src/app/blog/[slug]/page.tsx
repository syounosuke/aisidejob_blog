import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getPost, getPosts, urlFor } from '../../../lib/sanity'
import { Post } from '../../../types/sanity'
import ShareButton from '@/components/ShareButton'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const updatedDate = post.updatedAt ? new Date(post.updatedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null

  const portableTextComponents = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: ({ value }: any) => (
        <div className="my-8">
          <Image
            src={urlFor(value.asset).width(800).height(400).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="rounded-lg"
          />
          {value.alt && (
            <p className="text-center text-sm text-gray-600 mt-2">{value.alt}</p>
          )}
        </div>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      codeBlock: ({ value }: any) => (
        <div className="my-8">
          <div className="bg-gray-100 rounded-t-lg px-4 py-2 border-b">
            <span className="text-sm font-medium text-gray-600">
              {value.language || 'コード'}
            </span>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
            <code>{value.code}</code>
          </pre>
        </div>
      ),
    },
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({ children }: any) => (
        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({ children }: any) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
      ),
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          ブログ一覧に戻る
        </Link>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories && post.categories.map((category: string) => (
              <span 
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime={post.publishedAt}>
              公開日: {publishedDate}
            </time>
            {updatedDate && (
              <>
                <span className="mx-2">•</span>
                <time dateTime={post.updatedAt}>
                  更新日: {updatedDate}
                </time>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}
        </div>

        {post.imageUrl && (
          <div className="mb-8">
            <Image
              src={urlFor(post.imageUrl).width(800).height(400).url()}
              alt={post.title}
              width={800}
              height={400}
              className="w-full rounded-lg"
              priority
            />
          </div>
        )}
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText
          value={post.content}
          components={portableTextComponents}
        />
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">タグ</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ブログ一覧に戻る
          </Link>

          <div className="flex space-x-4">
            <ShareButton title={post.title} url={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${post.slug.current}`} />
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts() || []
  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }))
}