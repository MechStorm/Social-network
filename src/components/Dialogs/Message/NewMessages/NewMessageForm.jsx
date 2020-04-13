import React from "react";
import {reduxForm, reset} from "redux-form";
import {maxLengthValidation, required} from "../../../utils/validation";
import {createField, FieldRequiredForm} from "../../../utils/FieldLevelValidationForm";

const maxLength100 = maxLengthValidation(100);
const Textarea = FieldRequiredForm("textarea");

const NewMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField(null, "newMessage", "Enter your message...", Textarea, {type: "input"},
                [required, maxLength100])}
            <button>Add message</button>
        </form>
    );
};

const afterSubmit = (res, dispatch) => {
    dispatch(reset('messages'));
};

export default reduxForm({form: 'messages', onSubmitSuccess: afterSubmit})(NewMessageForm);