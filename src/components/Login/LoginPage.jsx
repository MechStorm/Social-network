import React from "react";
import st from './LoginPage.module.css';
import LoginForm from "./LoginForm";
import {userLogin} from "../Redux/auth-reducer";
import {connect} from "react-redux";

class LoginPage extends React.Component{

    onSubmitting = (data) => {
        let {login, pass, rememberMe} = {...data};
        this.props.userLogin(login, pass, rememberMe);
    }

    render(){
      return <div className={st.loginField}>
        <h1>Login</h1>
        <LoginForm onSubmit={this.onSubmitting}/>
      </div>
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {userLogin})(LoginPage);