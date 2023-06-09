import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { MovieDetails } from "../../features/MovieDetails";
import { PersonDetails } from "../../features/PersonDetails";
import { PeopleList } from "../../features/PeopleList";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/person/:id">
            <PersonDetails />
          </Route>
          <Route path="/people">
            <PeopleList />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/">
            <Redirect to="/movies?page=1"></Redirect>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;