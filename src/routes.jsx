import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Montagem from "./components/Pages/Montagem";
// import Montagem from "./components/Pages/Montagem";
import Pagamento from "./components/Pages/Pagamento";

export default class RootRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Montagem} />
          <Route path="/pagamento" exact component={Pagamento} />
        </Switch>
      </BrowserRouter>
    );
  }
}
