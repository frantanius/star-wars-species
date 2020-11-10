import { useEffect, useCallback } from 'react'

const useInfiniteScroll = (refProps, dispatch) => {
  const observer = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' })
          }
        })
      }).observe(node)
    },
    [dispatch],
  )

  useEffect(() => {
    if (refProps.current) {
      observer(refProps.current)
    }
  }, [observer, refProps])
}

export default useInfiniteScroll
