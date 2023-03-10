import { API_TOKEN, API_URL } from './constants'
import { type Post } from './types'

type PostWithAuhtorAndContent = Pick<Post, 'name' | 'content'>

export const createPost = async (post: PostWithAuhtorAndContent) => {
  return fetch(`${API_URL}/posts/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: API_TOKEN
    },
    body: JSON.stringify({
      ...post
    })
  })
}

export const deletePost = async (id: number) => {
  return fetch(`${API_URL}/posts/delete/${id}`, {
    headers: {
      Authorization: API_TOKEN
    },
    method: 'DELETE'
  })
}
