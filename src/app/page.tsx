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
              <div className="flex items-center justify-center gap-8">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">祥</span>
                  <span className="text-gradient">之</span>
                  <span className="text-white">助</span>
                </h1>
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-electric/30 to-purple-500/30 rounded-full blur-lg"></div>
                  <Image
                    src="/アイコン.webp"
                    alt="祥之助のアイコン"
                    width={200}
                    height={200}
                    className="relative rounded-full shadow-xl border border-white/20"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
                  テクノロジーとビジネスの情報で
                  <span className="text-electric font-medium">幸せを追求</span>
                  するブログ
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog"
                    className="group bg-electric text-white px-8 py-4 rounded-2xl font-semibold hover:bg-electric/90 transition-all duration-300 shadow-xl hover:shadow-electric/25 inline-flex items-center justify-center relative z-10"
                  >
                    ブログを読む
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/profile"
                    className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-electric hover:text-electric transition-all duration-300 inline-flex items-center justify-center relative z-10"
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
              個人事業を運営しながら、ブログやAIについて情報を発信しています。<br />
              このサイトもAIで作成しました！！ぜひ興味のある記事を読んでいってくださいね
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-2xl border border-blue-200/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">テクノロジー</h3>
                <p className="text-gray-600 leading-relaxed">
                  最新のWeb技術、AI、NFTについて深く掘り下げます
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 bg-gradient-to-br from-emerald-600/10 via-green-600/10 to-teal-600/10 rounded-2xl border border-emerald-200/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-700">ビジネス</h3>
                <p className="text-gray-600 leading-relaxed">
                  2021年個人事業を開業！！ビジネスの観点から分析します
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 bg-gradient-to-br from-orange-600/10 via-red-600/10 to-pink-600/10 rounded-2xl border border-orange-200/20 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-700">AI最新情報</h3>
                <p className="text-gray-600 leading-relaxed">
                  AIの最新情報を発信しています!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Multi-layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-pink-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-800/15 to-transparent"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-indigo-400/20 rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-pink-400/20 rotate-45"></div>
        </div>
        
        
        {/* Radial Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 drop-shadow-lg text-white">
              <span className="text-gradient">リンク</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://x.com/syounosukeblog"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">X (Twitter)</h3>
                <p className="text-gray-300 text-sm">最新情報をつぶやき中</p>
              </div>
            </a>
            
            <a
              href="https://syounosukeblog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-gradient-to-br from-blue-600/80 to-blue-800/80 backdrop-blur-sm rounded-3xl border border-blue-300/20 hover:border-blue-300/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.158,12.786L9.46,20.625c0.806,0.344,1.66,0.555,2.54,0.555c1.047,0,2.051-0.181,2.986-0.51 c-0.024-0.038-0.046-0.079-0.065-0.124L12.158,12.786z M3.009,12c0,3.559,2.068,6.634,5.067,8.092L3.788,8.341 C3.289,9.459,3.009,10.696,3.009,12z M18.069,11.546c0-1.112-0.399-1.881-0.741-2.48c-0.456-0.741-0.883-1.368-0.883-2.109 c0-0.826,0.627-1.596,1.51-1.596c0.04,0,0.078,0.005,0.116,0.007C16.472,3.904,14.34,3.009,12,3.009 c-3.141,0-5.904,1.612-7.512,4.052c0.211,0.007,0.41,0.011,0.579,0.011c0.94,0,2.396-0.114,2.396-0.114 C7.947,6.93,8.004,7.642,7.52,7.699c0,0-0.487,0.057-1.029,0.085l3.274,9.739l1.968-5.901l-1.401-3.838 C9.848,7.756,9.389,7.699,9.389,7.699C8.904,7.642,8.961,6.93,9.446,6.958c0,0,1.484,0.114,2.368,0.114 c0.94,0,2.397-0.114,2.397-0.114c0.485-0.028,0.542,0.684,0.057,0.741c0,0-0.488,0.057-1.029,0.085l3.249,9.665l0.897-2.996 C17.841,13.284,18.069,12.316,18.069,11.546z M19.889,7.686c0.039,0.286,0.06,0.593,0.06,0.924c0,0.912-0.171,1.938-0.684,3.22 l-2.746,7.94c2.673-1.558,4.47-4.454,4.47-7.771C20.991,10.436,20.591,8.967,19.889,7.686z M12,22C6.486,22,2,17.514,2,12 C2,6.486,6.486,2,12,2c5.514,0,10,4.486,10,10C22,17.514,17.514,22,12,22z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WordPress</h3>
                <p className="text-blue-100 text-sm">メインブログサイト</p>
              </div>
            </a>
            
            <a
              href="https://note.com/syounosuke"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-gradient-to-br from-green-600/80 to-green-800/80 backdrop-blur-sm rounded-3xl border border-green-300/20 hover:border-green-300/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 3h3l5 8V5h3v14h-3l-5-8v8H6V5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">note</h3>
                <p className="text-green-100 text-sm">記事と日記を執筆</p>
              </div>
            </a>
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
