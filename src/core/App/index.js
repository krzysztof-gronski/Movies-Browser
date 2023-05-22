import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { PopularMoviesPage } from "../../features/PopularMoviesPage";

function App() {
  return (
    <>
      <BrowserRouter basename="https://krzysztof-gronski.github.io/Movies-Browser/">
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/">
            <PopularMoviesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
