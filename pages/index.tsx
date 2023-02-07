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
      <div className="relative -top-10 flex flex-col justify-center overflow-hidden rounded-sm px-8 pt-6 md:-top-10 md:flex-row md:gap-0 md:pt-0">
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
        <div className="absolute hidden h-full w-[1px] bg-gray-300/60 md:block"></div>
      </div>
      <div className="pt-4 md:pt-6">
        {posts && !isLoading && !isError && (
          <LatestNewsCard>
            {posts.map(post => (
              <div
                key={post.id}
                className="mb-4 border-b border-b-gray-300 pb-2 last:mb-0 last:border-b-0 last:pb-0 md:mb-6 md:pb-4"
              >
                <Link
                  href={`/news/${post.id}`}
                  className="text-sm font-medium underline-offset-2 hover:text-rose-800 hover:underline md:text-base"
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
