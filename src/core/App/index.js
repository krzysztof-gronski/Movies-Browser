import "./App.css";
import Navigation from "../../Navigation";
import { HashRouter, Switch, Route } from "react-router-dom";
import { MoviesList } from '../../features/MoviesList';

function App() {
  return (
    <>
    <HashRouter basename="/movie-browser">
      <Navigation />
      <Switch>
        <Route path="/people/:id">
          {"People Details"}
          </Route>
        <Route path="/people/:id">
          {"Movie"}
          </Route>
        <Route path="/people">
          {"People"}
          </Route>
        <Route path="/">
        <MoviesList/>
          </Route>
      </Switch>
    </HashRouter>
  </>
  );
}

export default App;

