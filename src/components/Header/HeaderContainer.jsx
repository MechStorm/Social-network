import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuth } from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    login: state.userAuth.login,
    isAuth: state.userAuth.isAuth,
    userProfile: state.userAuth.userProfile
  };
};

export default connect(mapStateToProps, { getAuth })(HeaderContainer);