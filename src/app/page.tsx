import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../lib/sanity";
import BlogCard from "@/components/BlogCard";
import { Post } from "../types/sanity";

export default async function Home() {
  const posts = await getPosts() || [];
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/profile.webp"
                alt="祥之助のプロフィール写真"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              祥之助
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              テクノロジーとビジネスの最新情報を発信するブログ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                ブログを読む
              </Link>
              <Link
                href="/profile"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                プロフィール
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">自己紹介</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              テクノロジー業界で10年以上の経験を持つエンジニア兼ビジネスパーソンです。
              最新の技術トレンドやビジネス戦略について、実践的な視点から情報を発信しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">テクノロジー</h3>
              <p className="text-gray-600">
                最新のWeb技術、AI、クラウドサービスについて深く掘り下げます
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ビジネス</h3>
              <p className="text-gray-600">
                スタートアップから企業戦略まで、ビジネスの観点から分析します
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">実践</h3>
              <p className="text-gray-600">
                理論だけでなく、実際のプロジェクトでの経験を共有します
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新記事</h2>
            <p className="text-lg text-gray-600">
              最新のブログ記事をチェックしてください
            </p>
          </div>
          
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.slice(0, 3).map((post: Post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
              
              <div className="text-center">
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
            </>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-8">記事は準備中です。近日公開予定！</p>
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                ブログ一覧を見る
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
