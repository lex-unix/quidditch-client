import Container from '@/components/container'
import Carousel from '@/components/carousel'
import StatsCard from '@/components/stats-card'
import StatsItem from '@/components/stat-item'
import Image from 'next/image'
import LatestNewsCard from '@/components/latest-news-card'
import UsePosts from '@/hooks/use-posts'
import Link from 'next/link'

export default function Home() {
  const { posts, isError, isLoading } = UsePosts(1, 5)

  return (
    <Container title="Quidditch">
      <div className="mb-0">
        <Carousel />
      </div>
      <div className="relative flex flex-col justify-center overflow-hidden rounded-sm pt-6 lg:-top-10 lg:flex-row lg:pt-0">
        <StatsCard statName="Standings">
          <StatsItem position={1}>
            <Image src="/milan.png" alt="Milan" width={25} height={25} />
            <span>gryffindor</span>
          </StatsItem>
          <StatsItem position={2}>
            <Image src="/udinese.png" alt="Udinese" width={25} height={25} />
            <span>slytherin</span>
          </StatsItem>
          <StatsItem position={3}>
            <Image src="/torino.png" alt="Udinese" width={25} height={25} />
            <span>hufflepuff</span>
          </StatsItem>
          <StatsItem position={4}>
            <Image src="/atalanta.png" alt="Udinese" width={25} height={25} />
            <span>ravenclaw</span>
          </StatsItem>
        </StatsCard>
        <StatsCard statName="Top players">
          <StatsItem position={1}>
            <Image src="/milan.png" alt="Milan" width={25} height={25} />
            <span>Harry Potter</span>
          </StatsItem>
          <StatsItem position={2}>
            <Image src="/udinese.png" alt="Udinese" width={25} height={25} />
            <span>Draco Malfoy</span>
          </StatsItem>
          <StatsItem position={3}>
            <Image src="/torino.png" alt="Udinese" width={25} height={25} />
            <span>Fred Weasley</span>
          </StatsItem>
          <StatsItem position={4}>
            <Image src="/atalanta.png" alt="Udinese" width={25} height={25} />
            <span>Jack Sloper</span>
          </StatsItem>
        </StatsCard>
        <div className="absolute inset-y-0 hidden h-full w-[1px] bg-gray-300/60 lg:block"></div>
        <div className="absolute inset-x-0 block h-[1px] w-full bg-gray-300/60 lg:hidden"></div>
      </div>
      <div className="pt-6">
        {posts && !isLoading && !isError && (
          <LatestNewsCard>
            {posts.map(post => (
              <div
                key={post.id}
                className="mb-4 border-b border-b-gray-300 pb-2 last:mb-0 last:border-b-0 last:pb-0 lg:mb-6 lg:pb-4"
              >
                <Link
                  href={`/news/${post.id}`}
                  className="text-base font-medium underline-offset-2 hover:text-rose-800 hover:underline lg:text-lg"
                >
                  {post.name}
                </Link>
              </div>
            ))}
          </LatestNewsCard>
        )}
      </div>
    </Container>
  )
}
