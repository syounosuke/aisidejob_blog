import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">祥之助</h3>
            <p className="text-gray-300 text-sm">
              テクノロジーとビジネスの最新情報を発信しています。<br />
              脱サラ個人事業主、育児をしながら<br />
              効率化の先の本当の大切な時間を求めて奮闘中<br />
              <strong>【経歴】</strong><br />
              工学部→会社員→10年後脱サラ→修理業 事業継承2021年～→法人化目標
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  プロフィール
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">リンク</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/syounosukeblog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://syounosukeblog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.158,12.786L9.46,20.625c0.806,0.344,1.66,0.555,2.54,0.555c1.047,0,2.051-0.181,2.986-0.51 c-0.024-0.038-0.046-0.079-0.065-0.124L12.158,12.786z M3.009,12c0,3.559,2.068,6.634,5.067,8.092L3.788,8.341 C3.289,9.459,3.009,10.696,3.009,12z M18.069,11.546c0-1.112-0.399-1.881-0.741-2.48c-0.456-0.741-0.883-1.368-0.883-2.109 c0-0.826,0.627-1.596,1.51-1.596c0.04,0,0.078,0.005,0.116,0.007C16.472,3.904,14.34,3.009,12,3.009 c-3.141,0-5.904,1.612-7.512,4.052c0.211,0.007,0.41,0.011,0.579,0.011c0.94,0,2.396-0.114,2.396-0.114 C7.947,6.93,8.004,7.642,7.52,7.699c0,0-0.487,0.057-1.029,0.085l3.274,9.739l1.968-5.901l-1.401-3.838 C9.848,7.756,9.389,7.699,9.389,7.699C8.904,7.642,8.961,6.93,9.446,6.958c0,0,1.484,0.114,2.368,0.114 c0.94,0,2.397-0.114,2.397-0.114c0.485-0.028,0.542,0.684,0.057,0.741c0,0-0.488,0.057-1.029,0.085l3.249,9.665l0.897-2.996 C17.841,13.284,18.069,12.316,18.069,11.546z M19.889,7.686c0.039,0.286,0.06,0.593,0.06,0.924c0,0.912-0.171,1.938-0.684,3.22 l-2.746,7.94c2.673-1.558,4.47-4.454,4.47-7.771C20.991,10.436,20.591,8.967,19.889,7.686z M12,22C6.486,22,2,17.514,2,12 C2,6.486,6.486,2,12,2c5.514,0,10,4.486,10,10C22,17.514,17.514,22,12,22z"/>
                </svg>
              </a>
              <a
                href="https://note.com/syounosuke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 3h3l5 8V5h3v14h-3l-5-8v8H6V5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} 祥之助. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}