import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { MovieDetails } from "../../features/MovieDetails";
function App() {
  return (
    <>
      <HashRouter basename="/movie-browser">
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people"><MovieDetails/></Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
