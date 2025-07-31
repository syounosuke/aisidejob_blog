import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'li8wy5y0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export async function getPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        "imageUrl": mainImage.asset->url,
        "categories": coalesce(categories[]->title, []),
        "tags": coalesce(tags[]->title, [])
      }
    `)
    return posts || []
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return []
  }
}

export async function getPost(slug: string) {
  try {
    return await client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        updatedAt,
        content,
        "imageUrl": mainImage.asset->url,
        "categories": coalesce(categories[]->title, []),
        "tags": coalesce(tags[]->title, []),
        "categoryRefs": categories[]._ref
      }
    `, { slug })
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

export async function getRelatedPosts(categoryRefs: string[], currentSlug: string) {
  try {
    // まずカテゴリが一致する記事を探す
    let relatedPosts: any[] = []
    
    if (categoryRefs && categoryRefs.length > 0) {
      relatedPosts = await client.fetch(`
        *[_type == "post" && categories[]._ref in $categoryRefs && slug.current != $currentSlug] 
        | order(publishedAt desc) [0...2] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          "imageUrl": mainImage.asset->url,
          "categories": coalesce(categories[]->title, [])
        }
      `, { categoryRefs, currentSlug })
    }
    
    // カテゴリが一致する記事が少ない場合、最新記事で補完
    if (relatedPosts.length < 2) {
      const additionalPosts = await client.fetch(`
        *[_type == "post" && slug.current != $currentSlug] 
        | order(publishedAt desc) [0...${2 - relatedPosts.length}] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          "imageUrl": mainImage.asset->url,
          "categories": coalesce(categories[]->title, [])
        }
      `, { currentSlug })
      
      // 重複を避けて追加
      const existingIds = relatedPosts.map((post: any) => post._id)
      const filteredAdditional = additionalPosts.filter((post: any) => !existingIds.includes(post._id))
      
      relatedPosts = [...relatedPosts, ...filteredAdditional.slice(0, 2 - relatedPosts.length)]
    }
    
    console.log('getRelatedPosts result:', relatedPosts)
    return relatedPosts
  } catch (error) {
    console.error('Failed to fetch related posts:', error)
    return []
  }
}

export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}

export async function getTags() {
  return client.fetch(`
    *[_type == "tag"] | order(title asc) {
      _id,
      title,
      slug
    }
  `)
}