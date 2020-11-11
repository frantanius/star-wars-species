import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
const Species = loadable(() => import('pages/Species'))
const SpeciesDetail = loadable(() => import('pages/SpeciesDetail'))

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Species} />
        <Route path="/:speciesName" component={SpeciesDetail} />
      </Switch>
    </Router>
  )
}

export default Routes
