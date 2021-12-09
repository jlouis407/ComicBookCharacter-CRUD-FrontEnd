import './App.css';
import ListSuperheroComponent from './components/ListSuperheroComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" component = {ListSuperheroComponent}></Route>
                <Route path = "/superhero" component = {ListSuperheroComponent}></Route>
                <ListSuperheroComponent/>
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
