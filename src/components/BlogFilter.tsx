'use client'

import { useState, useEffect } from 'react'
import { Post } from '../types/sanity'

interface BlogFilterProps {
  posts: Post[]
  onFilteredPosts: (filteredPosts: Post[]) => void
}

export default function BlogFilter({ posts, onFilteredPosts }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Get unique categories and tags from posts
  const allCategories = Array.from(
    new Set(posts.flatMap(post => post.categories || []))
  ).sort()
  
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  ).sort()

  useEffect(() => {
    let filteredPosts = posts

    // Filter by search term
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post =>
        post.categories?.includes(selectedCategory)
      )
    }

    // Filter by tag
    if (selectedTag) {
      filteredPosts = filteredPosts.filter(post =>
        post.tags?.includes(selectedTag)
      )
    }

    onFilteredPosts(filteredPosts)
  }, [posts, selectedCategory, selectedTag, searchTerm, onFilteredPosts])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedTag('')
    setSearchTerm('')
  }

  const hasActiveFilters = selectedCategory || selectedTag || searchTerm

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
      <div className="flex flex-col space-y-4">
        {/* Search Input */}
        <div className="w-full">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            記事を検索
          </label>
          <input
            type="text"
            id="search"
            placeholder="タイトルや内容で検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              カテゴリ
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">すべてのカテゴリ</option>
              {allCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div>
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
              タグ
            </label>
            <select
              id="tag"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">すべてのタグ</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters & Clear Button */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-sm text-gray-600">フィルタ中:</span>
            
            {searchTerm && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                検索: &quot;{searchTerm}&quot;
              </span>
            )}
            
            {selectedCategory && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                カテゴリ: {selectedCategory}
              </span>
            )}
            
            {selectedTag && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                タグ: {selectedTag}
              </span>
            )}
            
            <button
              onClick={clearFilters}
              className="text-xs text-gray-600 hover:text-gray-800 underline ml-2"
            >
              すべてクリア
            </button>
          </div>
        )}
      </div>
    </div>
  )
}