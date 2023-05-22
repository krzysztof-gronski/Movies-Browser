import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { PopularMoviesPage } from "../../features/PopularMoviesPage";

function App() {
  return (
    <>
      <HashRouter>
      <Navigation/>
      <Switch>
        <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/">
            <PopularMoviesPage />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
