import UsePosts from '@/hooks/use-posts'
import React from 'react'
import FeedPost from './feed-post'

export default function PostList() {
  const { posts, isLoading, isError } = UsePosts()

  if (isError || isLoading || !posts) {
    return null
  }

  return (
    <ul className="flex flex-col gap-4">
      {posts.map(post => (
        <FeedPost key={post.id} {...post} />
      ))}
    </ul>
  )
}
