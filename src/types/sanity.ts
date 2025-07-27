export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  updatedAt?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]
  imageUrl?: string
  categories?: string[]
  tags?: string[]
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Tag {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  bio?: string
  image?: string
  social?: {
    twitter?: string
    instagram?: string
    youtube?: string
  }
}