import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Login </label>
                <Field name="login" placeholder="Login" component="input" type="text"/>
            </div>
            <div>
                <label>Password </label>
                <Field name="pass" placeholder="Password" component="input" type="password"/>
            </div>

            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> Remember me
            </div>

            <button>Login</button>
        </form>
    );
};

export default reduxForm({form: "login"})(LoginForm);