import * as React from "react";
import { observer } from "mobx-react";

// Stores
import AppState from "./stores/app-state";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Header, Icon, Image } from "semantic-ui-react";
import CounterComponent from "./features/example";

class NotFoundComponent extends React.Component {
  render() {
    return <p>404 Page not found</p>;
  }
}

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={CounterComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
