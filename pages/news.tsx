import Container from '@/components/container'
import FeedPost from '@/components/feed-post'
import UsePosts from '@/hooks/use-posts'

export default function NewsPage() {
  const { posts, isLoading } = UsePosts()

  if (isLoading || !posts) {
    return null
  }

  return (
    <Container title="News">
      <div className="mb-6">
        <h1 className="text-2xl font-bold capitalize md:text-3xl">
          Latest news
        </h1>
      </div>
      <ul className="w-full max-w-4xl rounded-md border bg-white px-4 pt-4 md:py-4">
        {posts.map(post => (
          <FeedPost key={post.id} {...post} />
        ))}
      </ul>
    </Container>
  )
}
