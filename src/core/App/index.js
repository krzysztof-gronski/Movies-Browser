import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { MovieDetails } from "../../features/MovieDetails";
import Pagination from "../../common/Pagination";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";
import { ErrorPage } from "../../common/ErrorPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/noresults">
            <NoResults />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Person Details Page"}</Route>
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
          <Route path="/">
            <Redirect to="/movies"></Redirect>
          </Route>
        </Switch>
        <Pagination />
      </HashRouter>
    </>
  );
}

export default App;
