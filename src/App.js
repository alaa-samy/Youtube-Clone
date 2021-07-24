import './App.css';
import Header from './Header/Header';
import Recommendation from './Recommendation/Recommendation';
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Google from './Search/Google';
import ReactPage from './Search/ReactPage';
import Redux from './Search/Redux';
import Firebase from './Search/Firebase';
import Explore from './Explore/Explore';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact >
          <div className='app__page'>
            <Sidebar />
            <Recommendation />
          </div>
          </Route>
          <Route path='/explore' exact >
            <div className='app__page'>
              <Sidebar />
              <Explore />
            </div>
          </Route>
          <Route path='/search/: $(searchTerm)' >
            <div className='app__page'>
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route path='/google-developers' >
            <div className='app__page'>
              <Sidebar />
              <Google />
            </div>
          </Route>
          <Route path='/react' >
            <div className='app__page'>
              <Sidebar />
              <ReactPage />
            </div>
          </Route>
          <Route path='/redux' >
            <div className='app__page'>
              <Sidebar />
              <Redux />
            </div>
          </Route>
          <Route path='/firebase' >
            <div className='app__page'>
              <Sidebar />
              <Firebase />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
