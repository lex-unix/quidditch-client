import UsePosts from '@/hooks/use-posts'
import React from 'react'

export default function PostList() {
  const { posts, isLoading, isError } = UsePosts()

  if (isError || isLoading || !posts) {
    return null
  }

  return (
    <ul className="flex flex-col gap-5">
      {posts.map(post => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  )
}
