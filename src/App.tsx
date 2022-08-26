import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Generos from './generos/Generos';
import LandingPage from './LandingPage';
import Menu from "./Utils/Menu"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/generos">
              <Generos />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
