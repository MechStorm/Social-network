import React from "react";
import {reduxForm} from "redux-form";
import {maxLengthValidation, required} from "../utils/validation";
import {createField, FieldRequiredForm} from "../utils/FieldLevelValidationForm";
import e from '../common/Errors/Errors.module.css';

const maxLength25 = maxLengthValidation(25);
const maxLength20 = maxLengthValidation(20);

const Input = FieldRequiredForm("input");

const LoginForm = ({handleSubmit, pristine, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {
                createField("Login", "login", "Login", Input, {type: "text"}, [required, maxLength25])
            }

            {
                createField("Password", "pass", "Password", Input, {type: "password"}, [required, maxLength20])
            }

            {
                createField(null, "rememberMe", null, Input, {type: "checkbox"}, null, "Remember me")
            }

            <button disabled={pristine}>Login</button>
            {
                error && <div className={e.errMsg}>
                    {error}
                </div>
            }
        </form>
    );
};

export default reduxForm({form: "login"})(LoginForm);