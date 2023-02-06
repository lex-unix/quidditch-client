import { API_URL } from './constants'
import { type Post } from './types'

type PostWithAuhtorAndContent = Pick<Post, 'name' | 'content'>

export const createPost = async (post: PostWithAuhtorAndContent) => {
  return fetch(`${API_URL}/posts/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...post
    })
  })
}
