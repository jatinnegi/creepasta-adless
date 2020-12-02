import React, { Fragment } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Index from "./components/Index";
import Header from "./components/Header";
import Story from "./components/Story";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/creepypasta/:title" exact component={Story} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
