import React from 'react';
import st from './FieldLevelValidationForm.module.css';
import {Field} from "redux-form";

export const FieldRequiredForm = Element => ({input, meta: {error, touched}, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={st.formControl + " " + (hasError ? st.formErr : "")}>
            <Element {...input} {...props}/>
            <div>{hasError && <span className={st.errMsg}>{error}</span>}</div>
        </div>
    );
}

export const createField = (nameOfLabel, name, placeholder, component, typeOfField = {}, validators, ...text) => {
    return (
        <div>
            {nameOfLabel && <label>{nameOfLabel}</label>}
            <Field name={name} placeholder={placeholder} component={component} {...typeOfField}
                   validate={validators}/> {text}
        </div>
    )
};
