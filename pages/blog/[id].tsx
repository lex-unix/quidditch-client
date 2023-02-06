import { useRouter } from 'next/router'
import Container from '@/components/container'
import Post from '@/components/post'
import UsePost from '@/hooks/use-post'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') return

  const { post, isError, isLoading } = UsePost(id)

  if (!post || isError || isLoading) {
    return null
  }

  return (
    <Container title={post.name}>
      <Post
        id={post.id}
        name={post.name}
        content={post.content}
        posted={post.posted}
      />
    </Container>
  )
}
