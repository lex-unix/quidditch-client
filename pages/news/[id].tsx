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
      <div className="mx-auto w-full max-w-4xl">
        <Post
          id={post.id}
          name={post.name}
          content={post.content}
          posted={post.posted}
        />
        <div className="mt-4 md:mt-8">
          <h1 className="mb-2 text-xl font-medium md:mb-4 md:text-2xl">
            Leave a comment!
          </h1>
          <CommentForm postId={id} />
          {post.comments && (
            <div className="mt-6 flex flex-col gap-2 md:mt-8 md:gap-4">
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
        </div>
      </div>
    </Container>
  )
}
