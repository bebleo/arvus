import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import IndicesList from './components/IndicesList';
import IndexDetails from "./components/IndexDetails"
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={About} path="/about" />
      <Route exact component={IndicesList} path="/indices" />
      <Route component={IndexDetails} path="/indices/:id" />
      <Route exact component={Search} path="/search" />
      <Route component={PageNotFound} />
    </Switch>
)};

export default Routes;
