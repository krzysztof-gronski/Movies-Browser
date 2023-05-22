import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MainContainer } from "../../common/MainContainer/index";
function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movie/:id">{"Movie Details"}</Route>
          <Route path="/movies">
            <MainContainer />
          </Route>
          <Route path="/people/:id">{"Person details"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
