import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import app from "./components/app";
import reducers from "./reducers";
import signin from "./components/auth/signin";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
        <Route path="signin" component={signin} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
