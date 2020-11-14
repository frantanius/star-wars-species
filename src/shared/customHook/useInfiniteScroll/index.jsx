import { useState, useEffect } from 'react'

const useInfiniteScroll = (refProps) => {
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPages((prevPage) => prevPage + 1)
        }
      })
    }, options)

    if (refProps && refProps.current) {
      observer.observe(refProps.current)
    }
  }, [refProps, setPages])

  return pages
}

export default useInfiniteScroll
