import { useEffect, useRef } from 'react'

export default function useResizableTextarea(
  textarea: HTMLTextAreaElement | null,
  value: string
) {
  const refInitialHeight = useRef(0)
  const refIsInitial = useRef(true)

  useEffect(() => {
    if (!textarea) return

    if (refIsInitial.current) {
      refInitialHeight.current = textarea.getBoundingClientRect().height
      refIsInitial.current = false
    }

    textarea.style.height = '1px'
    textarea.style.height = `${Math.max(
      refInitialHeight.current,
      textarea.scrollHeight
    )}px`
  }, [value, textarea])
}
