import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">祥之助</h3>
            <p className="text-gray-600 text-sm">
              テクノロジーとビジネスの最新情報を発信するブログです。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  プロフィール
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">SNS</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/syounosuke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com/syounosuke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C3.9 14.81 3.9 13.235 3.9 12.017c0-1.218 0-2.793 1.233-3.675.868-.807 2.019-1.296 3.316-1.296 1.297 0 2.448.49 3.316 1.296 1.233.882 1.233 2.457 1.233 3.675 0 1.218 0 2.793-1.233 3.675-.868.806-2.019 1.296-3.316 1.296zm7.718 0c-1.297 0-2.448-.49-3.316-1.296C11.618 14.81 11.618 13.235 11.618 12.017c0-1.218 0-2.793 1.233-3.675.868-.807 2.019-1.296 3.316-1.296 1.297 0 2.448.49 3.316 1.296 1.233.882 1.233 2.457 1.233 3.675 0 1.218 0 2.793-1.233 3.675-.868.806-2.019 1.296-3.316 1.296z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} 祥之助. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}