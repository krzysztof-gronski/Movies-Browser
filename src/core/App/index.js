import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { PopularMoviesPage } from "../../features/PopularMoviesPage";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/">
            <PopularMoviesPage />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
