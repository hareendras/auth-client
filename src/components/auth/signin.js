import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log("props in handeFormSubmit", email, password);
    console.log("propsz", this.props);
    this.props.signInUser({ email, password });
  }

  renderAlert() {
    console.log(this.props.errorMessage);
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
      
    }
  }
  render() {
    //console.log("PROPZ", this.props);
    const { handleSubmit } = this.props; // handlesubmit comes from redux form
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
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type} className="form-control" />
  </div>
);



const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
};
export default reduxForm({
  form: "signin"
})(connect(mapStateToProps, actions)(Signin));
