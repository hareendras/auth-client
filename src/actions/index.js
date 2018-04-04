import axios from "axios";

const ROOT_URL = "http://localhost:3090";

export function signInUser({ email, password }) {
  return function(dispatch) {
    // sumbit email password to server
    const data = { email: email, password: password };
    axios.post(`${ROOT_URL}/signin`, { email, data });

    // if req is good update state to indicate user is authenticated

    // --save jwt token

    // --redirect to /feature

    // if req is bad
    // -- show error to user
  };

  // we are returning a function from this action creator
  // this is possible because we use redux-thunk
}
