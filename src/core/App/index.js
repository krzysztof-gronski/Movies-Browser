import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import Pagination from "../../common/Pagination";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/movie/:id">{"Movie Details"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/">
            <Redirect to="/movies?page=1"></Redirect>
          </Route>
        </Switch>
        <Pagination />
      </HashRouter>
    </>
  );
}

export default App;
