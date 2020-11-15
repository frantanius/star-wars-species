import { Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import RouteProgress from 'shared/components/RouteProgress'
const Species = loadable(() => import('pages/Species'))
const SpeciesDetail = loadable(() => import('pages/SpeciesDetail'))
const NotFound = loadable(() => import('pages/NotFound'))

const routes = [
  {
    title: 'Species',
    path: '/',
    exact: true,
    component: Species,
  },
  {
    title: 'Species detail',
    path: '/:speciesName',
    exact: true,
    component: SpeciesDetail,
  },
  {
    title: '404',
    path: '*',
    component: NotFound,
  },
]

const Routes = () => {
  return (
    <Switch>
      {routes.map((r, i) => (
        <RouteProgress key={i} {...r} />
      ))}
    </Switch>
  )
}

export default Routes
