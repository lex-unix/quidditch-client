import { useRouter } from 'next/router'
import Container from '@/components/container'
import Post from '@/components/post'
import CommentForm from '@/components/comment-form'
import Comment from '@/components/comment'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { API_URL } from '@/lib/constants'
import { Post as PostProps } from '@/lib/types'

export default function PostPage({
  post
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') return

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

export const getServerSideProps: GetServerSideProps<{
  post: PostProps
}> = async context => {
  const { id } = context.query

  const res = await fetch(`${API_URL}/posts/get/${id}`)

  const post: PostProps = await res.json()

  return {
    props: {
      post
    }
  }
}
