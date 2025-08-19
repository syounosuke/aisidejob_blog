import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  try {
    const body = await parseBody(request, process.env.SANITY_REVALIDATE_SECRET!)
    
    if (!body) {
      return NextResponse.json({ message: 'Invalid webhook payload' }, { status: 400 })
    }

    const { _type, slug } = body

    if (_type === 'post' && slug?.current) {
      // 特定の記事ページを再生成
      revalidatePath(`/blog/${slug.current}`)
      // ブログ一覧ページも再生成
      revalidatePath('/blog')
      // ホームページも再生成（最新記事表示のため）
      revalidatePath('/')
      
      console.log(`Revalidated paths for post: ${slug.current}`)
      
      return NextResponse.json({ 
        message: `Revalidated post: ${slug.current}`,
        revalidated: true,
        now: Date.now()
      })
    }

    // その他のコンテンツタイプの場合
    if (_type) {
      revalidatePath('/')
      revalidatePath('/blog')
      
      return NextResponse.json({ 
        message: `Revalidated for type: ${_type}`,
        revalidated: true,
        now: Date.now()
      })
    }

    return NextResponse.json({ message: 'No action needed' }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}