import { useState, useEffect, useCallback } from 'react'

const useInfiniteScroll = (refProps) => {
  const [pages, setPages] = useState(0)

  const loadMoreCallback = useCallback(
    (entries) => {
      const target = entries[0]
      if (target.isIntersecting) {
        setPages((prevPage) => prevPage + 1)
      }
    },
    [setPages],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(loadMoreCallback, {
      root: null,
      threshold: 0.25,
    })

    if (refProps && refProps.current) {
      observer.observe(refProps.current)
    }
  }, [refProps, loadMoreCallback])

  return pages
}

export default useInfiniteScroll
