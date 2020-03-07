import React from "react";
import st from './LoginPage.module.css';
import LoginForm from "./LoginForm";
import {userLogin} from "../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class LoginPage extends React.Component {

    login = (data) => {
        let {login, pass, rememberMe} = {...data};
        this.props.userLogin(login, pass, rememberMe);
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={`/profile/${this.props.id}`} />
        }

        return <div className={st.loginField}>
            <h1>Login</h1>
            <LoginForm onSubmit={this.login}/>
        </div>
    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.userAuth.isAuth,
        id: state.userAuth.id
    }
}

export default connect(mapStateToProps, {userLogin})(LoginPage);