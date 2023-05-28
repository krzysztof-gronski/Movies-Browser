import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { MovieDetails } from "../../features/MovieDetails";
import Pagination from "../../common/Pagination";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people"><NoResults></NoResults></Route>
          <Route path="/movie/:id">{"Movie Details"}</Route>
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
