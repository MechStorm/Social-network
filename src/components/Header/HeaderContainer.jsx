import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth, setUserProfile } from "../Redux/auth-reducer";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          this.props.setUserAuth(id, login, email);
          
          userAPI.getProfile(id)
          .then(data => {
            this.props.setUserProfile(data);
          });
        }
      });
  }

  render() {
    return <Header {...this.props} userProfile={this.props.userProfile}/>;
  }
}

const mapStateToProps = state => {
  return {
    login: state.userAuth.login,
    isAuth: state.userAuth.isAuth,
    userProfile: state.userAuth.userProfile
  };
};

export default connect(mapStateToProps, { setUserAuth, setUserProfile })(HeaderContainer);