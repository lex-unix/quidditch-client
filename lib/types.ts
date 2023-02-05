export type Post = {
  id: number
  name: string
  content: string
  posted: string
  comments?: Array<Comment>
}

export type Comment = {
  id: number
  author: string
  content: string
  posted: string
}

export type Player = {
  id: number
  name: string
  age: number
  playerType: string
}
