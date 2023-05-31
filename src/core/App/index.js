import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { MovieDetails } from "../../features/MovieDetails";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";
import { ErrorPage } from "../../common/ErrorPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people">{"People List Page"}</Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
