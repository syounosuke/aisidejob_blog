import { Metadata } from 'next'
import Image from "next/image"

export const metadata: Metadata = {
  title: 'プロフィール',
  description: '祥之助のプロフィールページ。10年間の自動車車載部品設計開発経験を経て、2021年から個人事業主として活動。SEO対策、ウェブサイト開発、機械設計、3DCGなどの専門分野で幅広く活動しています。',
  keywords: ['祥之助', 'プロフィール', '個人事業主', 'SEO対策', 'ウェブサイト開発', '機械設計', '3DCG', 'ブロガー'],
  openGraph: {
    title: 'プロフィール | 祥之助のAIブログ',
    description: '祥之助のプロフィールページ。個人事業主として活動し、SEO対策、ウェブサイト開発、機械設計、3DCGなどの専門分野で幅広く活動しています。',
    type: 'profile',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'}/profile`,
    siteName: '祥之助のAIブログ',
    locale: 'ja_JP',
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: '祥之助のプロフィール',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プロフィール | 祥之助のAIブログ',
    description: '祥之助のプロフィールページ。個人事業主として活動し、SEO対策、ウェブサイト開発、機械設計、3DCGなどの専門分野で幅広く活動しています。',
    creator: '@syounosukeblog',
    images: ['/profile.webp'],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'}/profile`,
  },
}

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Image
          src="/profile.webp"
          alt="祥之助のプロフィール写真"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">祥之助</h1>
        <p className="text-xl text-gray-600">
          個人事業主＆副業ブロガー
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">プロフィール</h2>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            10年間、自動車車載部品の設計開発に携わりその後に脱サラ。<br />
            家業を継承して事業運営に奮闘しています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            2021年から本業をしながらブログやWeb3の世界にも挑戦、最近はAIやNFTについての活動もしています。
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">専門分野</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">SEO対策</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• 検索キーワード選定</li>
              <li>• SEO記事作成</li>
              <li>• 流入解析</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">ウェブサイト開発</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Wordpress設計</li>
              <li>• Figuma StudionによるLP作成</li>
              <li>• Vibe coding開発(Claude code)</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">機械設計</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Fusion360</li>
              <li>• 構想設計から試作、量産設計まで</li>
              <li>• 他社品ベンチマーク、評価試験</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">3DCG</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Blender</li>
              <li>• 3Dプリンタ出力(Banbu Lab P1S)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">経歴</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-semibold text-gray-900">2021-現在</h4>
            <p className="text-gray-600">個人事業主で事業を運営</p>
            <p className="text-gray-500 text-sm mt-1">
              法人化のため事業拡大を目指して奮闘中
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold text-gray-900">2011-2020</h4>
            <p className="text-gray-600">自動車車載部品の設計開発の業務に携わる</p>
            <p className="text-gray-500 text-sm mt-1">
              構想設計から量産立ち上げまでの製品設計、育成の経験あり
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            ブログ記事の作成や技術相談などのご依頼は下記からお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://twitter.com/syounosuke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              X(Twitter)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}