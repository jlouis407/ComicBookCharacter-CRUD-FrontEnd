import './App.css';
import ListComicBookCharacter from './components/ListComicBookCharacter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <div className = "container">
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" component = {ListComicBookCharacter}></Route>
                <Route path = "/comicBookCharacters" component = {ListComicBookCharacter}></Route>
                <ListComicBookCharacter/>
              </Switch>
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
  );
}

export default App;
