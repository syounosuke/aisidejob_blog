import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "祥之助のAIブログ",
    template: "%s | 祥之助のAIブログ"
  },
  description: "テクノロジーとビジネスの情報で幸せを追求するブログ。AI、Web技術、ビジネスについて深く掘り下げて情報発信しています。",
  keywords: ["AI", "テクノロジー", "ビジネス", "Web開発", "ブログ", "祥之助"],
  authors: [{ name: "祥之助" }],
  creator: "祥之助",
  publisher: "祥之助",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/アイコン.webp",
    shortcut: "/アイコン.webp",
    apple: "/アイコン.webp",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://20250727aisidejobblog.vercel.app",
    title: "祥之助のAIブログ",
    description: "テクノロジーとビジネスの情報で幸せを追求するブログ",
    siteName: "祥之助のAIブログ",
    images: [
      {
        url: "/アイコン.webp",
        width: 1200,
        height: 630,
        alt: "祥之助のAIブログ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "祥之助のAIブログ",
    description: "テクノロジーとビジネスの情報で幸せを追求するブログ",
    creator: "@syounosukeblog",
    images: ["/アイコン.webp"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://20250727aisidejobblog.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
