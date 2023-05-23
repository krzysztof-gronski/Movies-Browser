import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MainContainer } from "../../common/MainContainer";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/movie/:id">{"Movie Details"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/movies">
            <MainContainer />
          </Route>
          <Route path="/">
            <Redirect to="/movies"></Redirect>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
