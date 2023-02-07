import Container from '@/components/container'
import PostList from '@/components/post-list'

export default function NewsPage() {
  return (
    <Container title="News">
      <div className="mb-6">
        <h1 className="font-bold md:text-2xl">News</h1>
      </div>
      <PostList />
    </Container>
  )
}
