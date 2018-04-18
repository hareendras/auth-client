import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  handleFormSubmit({ email, password }) {
    console.log("props in handeFormSubmit", email, password);
    console.log("propsz", this.props);
    //  this.props.signInUser({ email, password });
  }
  render() {
    const { handleSubmit } = this.props;
    console.log("props in render", this.props);
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div classame="form-group">
          <label>Email:</label>
          <Field
            name="email"
            component={renderInput}
            className="form-control"
            type="text"
          />
        </div>
        <div classame="form-group">
          <label>Password:</label>
          <Field
            name="password"
            component={renderInput}
            className="form-control"
            type="password"
          />
        </div>
        <div classame="form-group">
          <label>Confirm Password:</label>
          <Field
            name="confirmPassword"
            component={renderInput}
            className="form-control"
            type="password"
          />
        </div>
        <button action="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    );
  }
}

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} type={type} className="form-control" />
    {error}
  </div>
);

const validate = formProps => {
  const errors = {};
  console.log("VAL", formProps);
  if (formProps.password !== formProps.confirmPassword) {
    errors.password = "Passwords must match";
  }
  
  return errors;
};

export default reduxForm({
  form: "signup",
  validate
})(connect(null, actions)(Signup));
