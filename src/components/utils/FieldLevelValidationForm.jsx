import React from 'react';
import st from './FieldLevelValidationForm.module.css';

export const FieldRequiredForm = Element => ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={st.formControl + " " + (hasError ? st.formErr : "")}>
            <Element {...input} {...props}/>
            <div>{hasError && <span className={st.errMsg}>{meta.error}</span>}</div>
        </div>
    );
}