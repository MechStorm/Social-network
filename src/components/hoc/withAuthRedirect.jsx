import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthRedirect = Component => {
  class Redirecting extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let mapStateAuthRedirectingToProps = state => {
    return {
      isAuth: state.userAuth.isAuth
    };
  };
  Redirecting = connect(mapStateAuthRedirectingToProps)(Redirecting);
  return Redirecting;
};