import { API_TOKEN, API_URL } from './constants'
import { Comment } from './types'

type CommentWihoutIdAndPosted = Omit<Comment, 'id' | 'posted'>

export const createComment = async (
  postId: string,
  comment: CommentWihoutIdAndPosted
) => {
  return fetch(`${API_URL}/comments/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: API_TOKEN
    },
    body: JSON.stringify({
      ...comment,
      post: {
        id: postId
      }
    })
  })
}

export const deleteComment = async (id: number) => {
  return fetch(`${API_URL}/comments/delete/${id}`, {
    headers: {
      Authorization: API_TOKEN
    },
    method: 'DELETE'
  })
}
