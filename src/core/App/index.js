import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
function App() {
  return (
    <>
      <BrowserRouter basename="/Movies-Browser/">
        <Navigation />
        <Switch>
          <Route path="/movie/:id">{"Movie Details"}</Route>
          <Route path="/movies">
            <MainContainer />
          </Route>
          <Route path="/people/:id">{"Person details"}</Route>
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
