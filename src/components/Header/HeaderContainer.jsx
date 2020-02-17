import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth, setUserProfile } from "../Redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserAuth(id, login, email);
          
          axios
          .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
          .then(response => {
            debugger;
            this.props.setUserProfile(response.data);
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