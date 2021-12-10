import './App.css';
import ListSuperheroComponent from './components/ListSuperheroComponent';
import CreateSuperheroComponent from './components/CreateSuperheroComponent';
import UpdateSuperheroComponent from './components/UpdateSuperheroComponent';
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
                <Route path = "/" exact component = {ListSuperheroComponent}></Route>
                <Route path = "/superheroes" component = {ListSuperheroComponent}></Route>
                <Route path = "/add-superhero/:id" component = {CreateSuperheroComponent}></Route>
                {/* <Route path = "/update-superhero/:id" component = {UpdateSuperheroComponent}></Route>*/}
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
