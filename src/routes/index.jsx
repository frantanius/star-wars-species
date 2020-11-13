import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
const Species = loadable(() => import('pages/Species'))
const SpeciesDetail = loadable(() => import('pages/SpeciesDetail'))
const NotFound = loadable(() => import('pages/NotFound'))

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Species} />
        <Route exact path="/:speciesId" component={SpeciesDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
