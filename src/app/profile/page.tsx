import Image from "next/image"

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
          テクノロジー & ビジネス ライター
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">プロフィール</h2>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            テクノロジー業界で10年以上の経験を持つエンジニア兼ビジネスパーソン。
            Web開発からクラウドインフラ、AI・機械学習まで幅広い技術領域に精通している。
          </p>
          <p className="text-gray-700 leading-relaxed">
            現在は、スタートアップから大企業まで様々な組織でデジタルトランスフォーメーションの推進に携わりながら、
            最新の技術トレンドやビジネス戦略について実践的な視点から情報を発信している。
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">専門分野</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">フロントエンド開発</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• React / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Vue.js / Nuxt.js</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">バックエンド開発</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Node.js / Express</li>
              <li>• Python / Django</li>
              <li>• API設計</li>
              <li>• データベース設計</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">クラウド / インフラ</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• AWS / Azure / GCP</li>
              <li>• Docker / Kubernetes</li>
              <li>• CI/CD</li>
              <li>•監視・運用</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">ビジネス戦略</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• DXコンサルティング</li>
              <li>• プロダクト戦略</li>
              <li>• アジャイル開発</li>
              <li>• チームマネジメント</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">経歴</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-semibold text-gray-900">現在</h4>
            <p className="text-gray-600">フリーランス テクニカルコンサルタント</p>
            <p className="text-gray-500 text-sm mt-1">
              スタートアップから大企業まで、技術戦略立案から実装まで幅広くサポート
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold text-gray-900">2020-2023</h4>
            <p className="text-gray-600">テックスタートアップ CTO</p>
            <p className="text-gray-500 text-sm mt-1">
              AIを活用したSaaSプロダクトの技術責任者として、チーム構築から製品開発まで主導
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold text-gray-900">2015-2020</h4>
            <p className="text-gray-600">大手IT企業 シニアエンジニア</p>
            <p className="text-gray-500 text-sm mt-1">
              エンタープライズ向けWebアプリケーション開発およびクラウド移行プロジェクトをリード
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            技術コンサルティング、講演、記事執筆のご依頼は以下からお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@syounosuke.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              メールでお問い合わせ
            </a>
            <a
              href="https://twitter.com/syounosuke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}