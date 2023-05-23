import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MainContainer } from "../../common/MainContainer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/movies">
            <MainContainer />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
