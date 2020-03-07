import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidation, required} from "../utils/validation";
import {FieldRequiredForm} from "../utils/FieldLevelValidationForm";
import st from '../Login/LoginPage.module.css';

const maxLength25 = maxLengthValidation(25);
const maxLength20 = maxLengthValidation(20);

const Input = FieldRequiredForm("input");

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Login </label>
                <Field name="login" placeholder="Login" component={Input} type="text"
                       validate={[required, maxLength25]}/>
            </div>
            <div>
                <label>Password </label>
                <Field name="pass" placeholder="Password" component={Input} type="password"
                       validate={[required, maxLength20]}/>
            </div>

            <div>
                <Field name="rememberMe" component={Input} type="checkbox"/> Remember me
            </div>

            <button disabled={props.pristine}>Login</button>
            {
                props.error && <div className={st.errMsg}>
                    {props.error}
                </div>
            }
        </form>
    );
};

export default reduxForm({form: "login"})(LoginForm);