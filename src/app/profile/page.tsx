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
          個人事業主＆副業ブロガー
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">プロフィール</h2>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            10年間、自動車の車載部品の設計開発の仕事に携わる。<br />
            その後、脱サラして家業の事業を継承して事業運営中。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            個人事業主の運営について発信しているブログサイト、<a href="https://syounosukeblog.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">syounosukeblog</a>も2021年から運営しています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            最近ではWeb3の世界に参加して、NFTやAIの知識を習得しています。
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">専門分野</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">SEO対策</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• キーワード選定</li>
              <li>• SEO記事作成</li>
              <li>• 流入解析</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">サイト開発</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• wordpress</li>
              <li>• Figma⇒Studio</li>
              <li>• vibe coding(claude code)</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">機械設計</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Fusion360</li>
              <li>• 構想設計、試作設計～量産設計まで</li>
              <li>• 他社品ベンチマーク、評価試験なども対応可能</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">3DCG</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Blender</li>
              <li>• 3Dプリンタ(Bambu Lab P1s)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">経歴</h3>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-semibold text-gray-900">2021-現在</h4>
            <p className="text-gray-600">個人事業主</p>
            <p className="text-gray-500 text-sm mt-1">
              家業を事業継承して、事業運営に奮闘中
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-6">
            <h4 className="font-semibold text-gray-900">2011-2020</h4>
            <p className="text-gray-600">自動車車載部品の設計者</p>
            <p className="text-gray-500 text-sm mt-1">
              構想設計から量産立ち上げまで製品育成をする仕事に従事
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            記事作成や技術相談などのご依頼はX(旧Twitter)DMからお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://x.com/syounosukeblog"
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