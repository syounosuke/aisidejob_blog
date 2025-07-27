import { getPosts } from "../../lib/sanity"
import BlogCard from "@/components/BlogCard"
import { Post } from "../../types/sanity"

export default async function BlogPage() {
  const posts = await getPosts() || []
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
        <p className="text-lg text-gray-600">
          テクノロジーとビジネスに関する最新の記事をお読みください
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  )
}