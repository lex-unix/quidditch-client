import Container from '@/components/container'
import FeedPost from '@/components/feed-post'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import usePosts from '@/hooks/use-posts'
import { pageAtom } from '@/store/page'
import { useAtom } from 'jotai'
import React from 'react'

export default function NewsPage() {
  const [page, setPage] = useAtom(pageAtom)

  return (
    <Container title="News">
      <div className="mb-6">
        <h1 className="font-cinzel text-2xl font-bold capitalize md:text-3xl">
          Latest news
        </h1>
      </div>
      <Page
        currentPage={page}
        onNextPageClick={() => setPage(page + 1)}
        onPrevPageClick={() => setPage(page - 1)}
      />
      <div className="hidden">
        <Page
          currentPage={page + 1}
          onNextPageClick={() => {}}
          onPrevPageClick={() => {}}
        />
      </div>
    </Container>
  )
}

interface Props {
  currentPage: number
  onNextPageClick: () => void
  onPrevPageClick: () => void
}

const Page: React.FC<Props> = ({
  currentPage,
  onNextPageClick,
  onPrevPageClick
}) => {
  const length = 33
  const { posts, totalCount, isLoading } = usePosts(currentPage, length)

  if (isLoading || !posts || !totalCount) {
    return null
  }

  const hasNextPage = totalCount - currentPage * length > 0
  const hasPrevPage = currentPage !== 1

  return (
    <div>
      <ul className="w-full max-w-4xl rounded-md border bg-white px-4 pt-4 md:py-4">
        {posts.map(post => (
          <FeedPost key={post.id} {...post} />
        ))}
      </ul>
      <div className="mx-10 mt-4 flex justify-center gap-8">
        <button
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md border ${
            !hasPrevPage ? 'opacity-30' : ''
          }`}
          disabled={!hasPrevPage}
          onClick={onPrevPageClick}
        >
          <ChevronLeftIcon width={20} height={20} />
        </button>
        <button
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md border ${
            !hasNextPage ? 'opacity-30' : ''
          }`}
          disabled={!hasNextPage}
          onClick={onNextPageClick}
        >
          <ChevronRightIcon width={20} height={20} />
        </button>
      </div>
    </div>
  )
}
