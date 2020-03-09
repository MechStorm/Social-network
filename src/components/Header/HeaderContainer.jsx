import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {userLogout} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {
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


export default connect(mapStateToProps, {userLogout})(HeaderContainer);