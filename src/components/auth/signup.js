import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  handleFormSubmit(formprops) {
    //  console.log("props in handeFormSubmit", email, password);
    //  console.log("propsz", this.props);
    //  this.props.signInUser({ email, password });

    this.props.signupUser(formprops);
  }
  renderAlert() {
    console.log("renderAlertprops",this.props);
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong>
          {this.props.errorMessage}
        </div>
      );
    } else return "";
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
        {this.renderAlert()}
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
    {touched && error && <div className="error">{error}</div>}
  </div>
);

const validate = formProps => {
  const errors = {};

  if (formProps.password !== formProps.confirmPassword) {
    errors.password = "Passwords must match";
  }

  if (!formProps.email) {
    errors.email = "Please enter email";
  }

  if (!formProps.password) {
    errors.password = "Please enter password";
  }
  if (!formProps.confirmPassword) {
    errors.confirmPassword = "Please confirm pasword";
  }

  return errors;
};

function mapStateTpProps(state) {
  // console.log("STATE",state);
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  form: "signup",
  validate
})(connect(mapStateTpProps, actions)(Signup));
