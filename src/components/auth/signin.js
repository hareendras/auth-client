import React, { Component } from "react";
import { reduxForm, fieldset } from "redux-form";

class Signin extends Component {
  handleFormSubmit(email, password) {
    console.log("DATA", email, password);
  }
  render() {
    const { handleSubmit, fields: { email, password } } = this.props; // handlesubmit email and password comes from redux form
    return (
      <form onSumbit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset classame="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset classame="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "signin",
  fields: ["email", "password"]
})(Signin);
