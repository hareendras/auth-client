import axios from "axios";
import { browserHistory } from "react-router";

const ROOT_URL = "http://localhost:3090";

export function signInUser({ email, password }) {
  return function(dispatch) {    // redux thunk magic
    // sumbit email password to server
    const data = { email: email, password: password };
    axios.post(`${ROOT_URL}/signin`, data)
    .then(response => {
  // if req is good update state to indicate user is authenticated

    // --save jwt token

    // --redirect to /feature
    browserHistory.push("/feature");
    })
    .catch(err=>
      // if req is bad
    // -- show error to user
      console.log(err))

  

    
  };

  // we are returning a function from this action creator
  // this is possible because we use redux-thunk
}
