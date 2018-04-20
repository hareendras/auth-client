import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from "./types";

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

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        console.log("res data==>>", response);
        localStorage.setItem("token", response.data.token);
        browserHistory.push("/feature");
      })
      .catch(error => {
        // console.log("res data==>>", response);
        dispatch(authError(error.response.data.error));
      });
  };
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

export function fetchMessage() {
  return function(dispatch) {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response =>
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      );
  };
}
