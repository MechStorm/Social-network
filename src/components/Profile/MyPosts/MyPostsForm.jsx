import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidation, required} from "../../utils/validation";
import {FieldRequiredForm} from "../../utils/FieldLevelValidationForm";

const maxLength15 = maxLengthValidation(15);
const Textarea = FieldRequiredForm("textarea");

const MyPostsForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"textOfPost"} placeholder={"Enter your post message..."}
                       validate={[required, maxLength15]} />
            </div>
            <div>
                <button>Add post!</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'posts'})(MyPostsForm);