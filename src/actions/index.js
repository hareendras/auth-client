import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";

const ROOT_URL = "http://localhost:3090";

export function signInUser({ email, password }) {
  return function(dispatch) {
    // redux thunk magic
    // sumbit email password to server
    const data = { email: email, password: password };
    axios
      .post(`${ROOT_URL}/signin`, data)
      .then(response => {
        // if req is good update state to indicate user is authenticated

        dispatch({ type: AUTH_USER });
        // --save jwt token
        localStorage.setItem("token", response.data.token);
        // --redirect to /feature
        dispatch(authError(""));
        browserHistory.push("/feature");
      })
      .catch(err =>
        // if req is bad
        // -- show error to user
        dispatch(authError("Bad login info"))
      );
  };
  // we are returning a function from this action creator
  // this is possible because we use redux-thunk
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}
