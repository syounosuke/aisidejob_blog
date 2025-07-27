export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
        <p className="text-lg text-gray-600">
          ご質問、ご相談、お仕事のご依頼はお気軽にお問い合わせください
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ方法</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">メール</h3>
                <p className="text-gray-600 mt-1">
                  最も確実な連絡方法です。24時間以内にご返信いたします。
                </p>
                <a 
                  href="mailto:contact@syounosuke.com"
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
                >
                  contact@syounosuke.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Twitter</h3>
                <p className="text-gray-600 mt-1">
                  カジュアルなご質問やフィードバックはTwitterでも受け付けています。
                </p>
                <a 
                  href="https://twitter.com/syounosuke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
                >
                  @syounosuke
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                <p className="text-gray-600 mt-1">
                  ビジネス関連のお問い合わせは LinkedIn でも承っています。
                </p>
                <a 
                  href="https://linkedin.com/in/syounosuke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
                >
                  LinkedIn プロフィール
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">対応可能なご依頼</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">技術コンサルティング</h3>
              <p className="text-gray-600 text-sm">
                システム設計、技術選定、DX戦略立案など、技術的な課題解決をサポートします。
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">開発支援</h3>
              <p className="text-gray-600 text-sm">
                Web アプリケーション開発、クラウド移行、API 設計などの開発支援を行います。
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">講演・セミナー</h3>
              <p className="text-gray-600 text-sm">
                技術トレンド、DX 推進、チームマネジメントなどのテーマで講演を行います。
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">記事執筆</h3>
              <p className="text-gray-600 text-sm">
                技術記事、ビジネス記事の執筆を承ります。取材や監修も対応可能です。
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">回答時間</h3>
            <p className="text-gray-600 text-sm">
              メールでのお問い合わせには原則24時間以内に回答いたします。
              緊急の場合は Twitter の DM もご利用ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}