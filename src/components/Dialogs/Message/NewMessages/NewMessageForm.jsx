import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidation, required} from "../../../utils/validation";
import {FieldRequiredForm} from "../../../utils/FieldLevelValidationForm";

const maxLength100 = maxLengthValidation(100);
const Textarea = FieldRequiredForm("textarea");

const NewMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} placeholder={"Enter your message..."} type={"input"} component={Textarea}
                       validate={[required, maxLength100]} />

            </div>
            <button>Add message</button>
        </form>
    );
};

export default reduxForm({form: 'messages'})(NewMessageForm);