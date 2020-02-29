import React from "react";
import {Field, reduxForm} from "redux-form";

const NewMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} placeholder={"Enter your message..."} type={"input"} component={"textarea"}/>
            </div>
            <button>Add message</button>
        </form>
    );
};

export default reduxForm({form: 'messages'})(NewMessageForm);