import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import reduxThunk from "redux-thunk";
import app from "./components/app";
import reducers from "./reducers";
import signin from "./components/auth/signin";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
        <Route path="signin" component={signin} />{" "}
        {/* signin component will be sent to App component as children. So in 
        App compononet under the <Header / > the epression  {this.props.children} is used*/}
      </Route>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
