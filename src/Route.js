import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/firstpage" component={FirstPage} />
          <Route exact={true} path="/secondpage" component={SecondPage} />
        </Switch>
      </div>
    );
  }
}
