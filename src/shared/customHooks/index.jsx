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

const useParallax = () => {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = useState(
    'translate3d(0,' + windowScrollTop + 'px,0)',
  )
  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
  }

  return transform
}

export { useInfiniteScroll, useParallax }
