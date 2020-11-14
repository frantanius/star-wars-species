import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import './style.scss'

const RouteProgress = (props) => {
  useEffect(() => {
    nprogress.done()
  }, [])

  nprogress.start()

  return <Route {...props} />
}

export default RouteProgress
