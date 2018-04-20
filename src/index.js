import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import reduxThunk from "redux-thunk";
import app from "./components/app";
import reducers from "./reducers";
import signin from "./components/auth/signin";
import signout from "./components/auth/signout";
import signup from "./components/auth/signup";
import feature from "./components/feature";
import RequireAuth from "./components/require_auth";
import Welcome from "./components/welcome";
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//below is a handy way to update state before the application is even loaded
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={signin} />{" "}
        {/* signin component will be sent to App component as children. So in 
        App compononet under the <Header / > the epression  {this.props.children} is used*/}
        <Route path="signout" component={signout} />
        <Route path="signup" component={signup} />
        <Route path="feature" component={RequireAuth(feature)} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
