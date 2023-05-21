import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "../../common/Navigation";
import { MainContainer } from "../../common/MainContainer/index";
function App() {
  return (
    <>
      <HashRouter basename="/movie-browser">
        <Navigation />
        <Switch>
          <Route path="/people/:id">{"People Details"}</Route>
          <Route path="/people/:id">{"Movie"}</Route>
          <Route path="/people">{"People"}</Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
