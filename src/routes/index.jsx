import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
const Species = loadable(() => import('pages/species'))
const SpeciesDetail = loadable(() => import('pages/speciesDetail'))

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Species} />
        <Route path="/detail" component={SpeciesDetail} />
      </Switch>
    </Router>
  )
}

export default Routes
