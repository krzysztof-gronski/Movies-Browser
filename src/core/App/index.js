import { HashRouter, Switch, Route } from "react-router-dom";
import { MoviesList } from "../../features/MoviesList";
import Navigation from "../../common/Navigation";

function App() {
  return (
    <>
      <BrowserRouter basename="/Movies-Browser/">
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
