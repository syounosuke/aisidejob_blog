import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../lib/sanity";
import BlogCard from "@/components/BlogCard";
import { Post } from "../types/sanity";

export default async function Home() {
  const posts = await getPosts() || [];
  return (
    <>
      <section className="gradient-modern py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-1 h-1 bg-yellow-200 rounded-full" style={{animation: 'starFlow 15s linear infinite, pulse 2s ease-in-out infinite'}}></div>
          <div className="absolute top-20 left-1/4 w-0.5 h-0.5 bg-yellow-100/70 rounded-full" style={{animation: 'starFlow 12s linear infinite'}}></div>
          <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full" style={{animation: 'starFlow 18s linear infinite, pulse 3s ease-in-out infinite'}}></div>
          <div className="absolute top-16 right-20 w-1 h-1 bg-yellow-200/80 rounded-full" style={{animation: 'starFlow 14s linear infinite'}}></div>
          <div className="absolute top-40 right-1/4 w-0.5 h-0.5 bg-yellow-100/60 rounded-full" style={{animation: 'starFlow 16s linear infinite, pulse 2.5s ease-in-out infinite'}}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-200 rounded-full" style={{animation: 'starFlow 10s linear infinite'}}></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-yellow-200/70 rounded-full" style={{animation: 'starFlow 20s linear infinite, pulse 4s ease-in-out infinite'}}></div>
          <div className="absolute bottom-40 left-1/2 w-0.5 h-0.5 bg-yellow-300 rounded-full" style={{animation: 'starFlow 13s linear infinite'}}></div>
          <div className="absolute bottom-60 left-2/3 w-1 h-1 bg-yellow-200/80 rounded-full" style={{animation: 'starFlow 17s linear infinite, pulse 3.5s ease-in-out infinite'}}></div>
          <div className="absolute bottom-80 right-10 w-1 h-1 bg-yellow-200 rounded-full" style={{animation: 'starFlow 19s linear infinite'}}></div>
          <div className="absolute bottom-32 right-1/3 w-0.5 h-0.5 bg-yellow-100/60 rounded-full" style={{animation: 'starFlow 15s linear infinite, pulse 2.8s ease-in-out infinite'}}></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-yellow-200/70 rounded-full" style={{animation: 'starFlow 14s linear infinite'}}></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-yellow-300 rounded-full" style={{animation: 'starFlow 21s linear infinite, pulse 3.2s ease-in-out infinite'}}></div>
          <div className="absolute bottom-1/4 left-3/4 w-0.5 h-0.5 bg-yellow-200/80 rounded-full" style={{animation: 'starFlow 18s linear infinite'}}></div>
          <div className="absolute top-3/4 right-2/3 w-1 h-1 bg-yellow-200/60 rounded-full" style={{animation: 'starFlow 16s linear infinite, pulse 4.5s ease-in-out infinite'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white block">祥</span>
                  <span className="text-gradient block">之</span>
                  <span className="text-white block">助</span>
                </h1>
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-electric/30 to-purple-500/30 rounded-full blur-lg"></div>
                  <Image
                    src="/アイコン.webp"
                    alt="祥之助のアイコン"
                    width={250}
                    height={250}
                    className="relative rounded-full shadow-xl border border-white/20"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
                  テクノロジーとビジネスの
                  <span className="text-electric font-medium">最新情報</span>
                  を発信するブログ
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog"
                    className="group bg-electric text-white px-8 py-4 rounded-2xl font-semibold hover:bg-electric/90 transition-all duration-300 shadow-xl hover:shadow-electric/25 inline-flex items-center justify-center"
                  >
                    ブログを読む
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/profile"
                    className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-electric hover:text-electric transition-all duration-300 inline-flex items-center justify-center"
                  >
                    プロフィール
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--primary-blue)'}}>自己紹介</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              テクノロジー業界で10年以上の経験を持つエンジニア兼ビジネスパーソンです。
              最新の技術トレンドやビジネス戦略について、実践的な視点から情報を発信しています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gold/20 japanese-pattern hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gold">テクノロジー</h3>
              <p className="text-gray-600">
                最新のWeb技術、AI、クラウドサービスについて深く掘り下げます
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gold/20 japanese-pattern hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gold">ビジネス</h3>
              <p className="text-gray-600">
                スタートアップから企業戦略まで、ビジネスの観点から分析します
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gold/20 japanese-pattern hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gold">実践</h3>
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
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--primary-blue)'}}>最新記事</h2>
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
                  className="inline-flex items-center text-gold hover:opacity-80 font-medium"
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
                className="inline-flex items-center text-gold hover:opacity-80 font-medium"
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
