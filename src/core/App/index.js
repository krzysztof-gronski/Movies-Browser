import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { PopularMoviesPage } from "../../features/PopularMoviesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/">
            <PopularMoviesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
