import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description: 'テクノロジーとビジネスに関する最新の記事一覧。AI、Web技術、ビジネス戦略について詳しく解説した記事をご覧いただけます。',
  keywords: ['ブログ', 'AI', 'テクノロジー', 'ビジネス', 'Web開発', '記事一覧'],
  openGraph: {
    title: 'ブログ一覧 | 祥之助のAIブログ',
    description: 'テクノロジーとビジネスに関する最新の記事一覧。AI、Web技術、ビジネス戦略について詳しく解説した記事をご覧いただけます。',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'}/blog`,
    siteName: '祥之助のAIブログ',
    locale: 'ja_JP',
    images: [
      {
        url: '/アイコン.webp',
        width: 1200,
        height: 630,
        alt: 'ブログ一覧 | 祥之助のAIブログ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ一覧 | 祥之助のAIブログ',
    description: 'テクノロジーとビジネスに関する最新の記事一覧。AI、Web技術、ビジネス戦略について詳しく解説した記事をご覧いただけます。',
    creator: '@syounosukeblog',
    images: ['/アイコン.webp'],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://20250727aisidejobblog.vercel.app'}/blog`,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}