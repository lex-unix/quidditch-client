import PostList from '@/components/post-list'
import PostForm from '@/components/post-form'
import Container from '@/components/container'

export default function Home() {
  return (
    <Container title="Quidditch">
      <div className="mb-4">
        <PostForm />
      </div>
      <PostList />
    </Container>
  )
}
