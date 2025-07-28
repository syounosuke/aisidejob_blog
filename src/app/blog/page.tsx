'use client'

import { useState, useEffect, useMemo } from "react"
import { getPosts } from "../../lib/sanity"
import BlogCard from "@/components/BlogCard"
import { Post } from "../../types/sanity"

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getPosts() || []
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Failed to load posts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  // Get unique categories and tags for filters
  const categories = useMemo(() => {
    const allCategories = posts.flatMap(post => post.categories || [])
    return [...new Set(allCategories)]
  }, [posts])

  const tags = useMemo(() => {
    const allTags = posts.flatMap(post => post.tags || [])
    return [...new Set(allTags)]
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      // Search term filter
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))

      // Category filter
      const matchesCategory = !selectedCategory || 
        (post.categories && post.categories.includes(selectedCategory))

      // Tag filter
      const matchesTag = !selectedTag || 
        (post.tags && post.tags.includes(selectedTag))

      return matchesSearch && matchesCategory && matchesTag
    })

    // Sort by date
    filtered.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime()
      const dateB = new Date(b.publishedAt).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

    return filtered
  }, [posts, searchTerm, selectedCategory, selectedTag, sortOrder])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric mx-auto"></div>
          <p className="mt-4 text-gray-600">記事を読み込み中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
        <p className="text-lg text-gray-600">
          テクノロジーとビジネスに関する最新の記事をお読みください
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="記事を検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15z" />
          </svg>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
          >
            <option value="">すべてのカテゴリ</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Tag Filter */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
          >
            <option value="">すべてのタグ</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>#{tag}</option>
            ))}
          </select>

          {/* Sort Order */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
          >
            <option value="newest">新しい順</option>
            <option value="oldest">古い順</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="text-center text-gray-600">
          {filteredPosts.length}件の記事が見つかりました
        </div>
      </div>

      {/* Posts Grid or Empty States */}
      {posts.length === 0 ? (
        <>
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3L9 12l4 4m6-7v10a2 2 0 01-2 2H5"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                記事は準備中です
              </h2>
              <p className="text-gray-600">
                現在、ブログ記事を準備中です。<br />
                Sanity CMSの設定が完了したら、記事を公開予定です。
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                今後の記事予定
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    最新のWeb技術トレンド
                  </h4>
                  <p className="text-gray-600 text-sm">
                    React 19、Next.js 15など最新のフロントエンド技術について
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI活用のビジネス戦略
                  </h4>
                  <p className="text-gray-600 text-sm">
                    企業におけるAI導入の成功事例と注意点
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    クラウドサービス比較
                  </h4>
                  <p className="text-gray-600 text-sm">
                    AWS、Azure、GCPの特徴と使い分け方法
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: Post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              条件に一致する記事が見つかりませんでした
            </h2>
            <p className="text-gray-600 mb-4">
              検索条件を変更して再度お試しください
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('')
                setSelectedTag('')
              }}
              className="px-4 py-2 bg-electric text-white rounded-lg hover:bg-electric/90 transition-colors"
            >
              フィルターをリセット
            </button>
          </div>
        </div>
      )}
    </div>
  )
}