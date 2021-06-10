import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistContainer from './containers/ArtistContainer';
import EventContainer from './containers/EventContainer';
import SearchContainer from './containers/SearchContainer';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/event/:id' component={EventContainer} />
          <Route exact path='/artist/:id' component={ArtistContainer} />
          <Route path='/' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
