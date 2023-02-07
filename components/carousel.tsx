import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronRightIcon, ChevronLeftIcon } from './icons'
import Image from 'next/image'

export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2500, stopOnInteraction: true })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div
      ref={emblaRef}
      className="relative h-auto w-full max-w-[1600px] overflow-hidden"
    >
      <div className="flex">
        <div className="aspect-[4/2] min-w-full cursor-grab overflow-hidden active:cursor-grabbing">
          <Image
            src="/carousel-4.jpg"
            alt="Some alt"
            width={1600}
            height={800}
          />
        </div>
        <div className="aspect-[4/2] min-w-full cursor-grab overflow-hidden active:cursor-grabbing">
          <Image
            src="/carousel-2.jpg"
            alt="Some alt"
            width={1600}
            height={800}
          />
        </div>
        <div className="aspect-[4/2] min-w-full cursor-grab overflow-hidden active:cursor-grabbing">
          <Image
            src="/carousel-3.jpg"
            alt="Some alt"
            width={1600}
            height={800}
            className="object-cover"
          />
        </div>
        <div className="aspect-[4/2] min-w-full cursor-grab overflow-hidden active:cursor-grabbing">
          <Image
            src="/carousel-1.webp"
            alt="Some alt"
            width={1600}
            height={800}
          />
        </div>
      </div>
      {selectedIndex > 0 && (
        <button
          onClick={scrollPrev}
          className="absolute top-[50%] left-4 flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-black/50 lg:left-8"
        >
          <ChevronLeftIcon />
        </button>
      )}
      {selectedIndex < scrollSnaps.length - 1 && (
        <button
          onClick={scrollNext}
          className="absolute top-[50%] right-4 flex h-10 w-10 translate-y-[-50%] items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-black/50 lg:right-8"
        >
          <ChevronRightIcon />
        </button>
      )}
      <div className="absolute inset-x-0 bottom-2 flex h-10 items-center justify-center gap-4 lg:bottom-14">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            active={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

interface DotButtonProps {
  active: boolean
  onClick: () => void
}

const DotButton = ({ active, onClick }: DotButtonProps) => {
  return (
    <button
      className={`h-[10px] w-[10px] rounded-full bg-white ${
        active ? '' : 'opacity-20'
      }`}
      onClick={onClick}
    ></button>
  )
}
