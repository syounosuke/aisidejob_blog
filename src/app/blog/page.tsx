import BlogPageClient from "./BlogPageClient"
import { getPosts } from "../../lib/sanity"

export default async function BlogPage() {
  const posts = await getPosts() || []
  
  return <BlogPageClient initialPosts={posts} />
}