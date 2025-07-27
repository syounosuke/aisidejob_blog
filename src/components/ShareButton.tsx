'use client'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch {
        console.log('シェアがキャンセルされました')
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        alert('URLをコピーしました')
      } catch (err) {
        console.error('URLのコピーに失敗しました:', err)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="text-gray-600 hover:text-gray-800 transition-colors"
    >
      シェア
    </button>
  )
}