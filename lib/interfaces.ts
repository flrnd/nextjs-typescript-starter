export interface Menu {
  name: string
  link: string
}

export interface Item {
  [key: string]: string
}

export interface IPost {
  slug: string
  title: string
  date: string
  coverImage: string
  description: string
  ogImage: {
    url: string
  }
  content: string
}
