import { useRouter } from 'next/router'
import Container from '@/components/container'
import Post from '@/components/post'
import UsePost from '@/hooks/use-post'
import CommentForm from '@/components/comment-form'
import Comment from '@/components/comment'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') return

  const { post, isError, isLoading } = UsePost(id)

  if (!post || isError || isLoading) {
    return null
  }

  console.log(post)

  return (
    <Container title={post.name}>
      <Post
        id={post.id}
        name={post.name}
        content={post.content}
        posted={post.posted}
      />
      <CommentForm postId={id} />
      {post.comments && (
        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-8">
          {post.comments.map(comment => (
            <Comment
              key={comment.id}
              postId={id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              posted={comment.posted}
            />
          ))}
        </div>
      )}
    </Container>
  )
}
