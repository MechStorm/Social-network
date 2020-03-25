import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidation, required} from "../../utils/validation";
import {createField, FieldRequiredForm} from "../../utils/FieldLevelValidationForm";

const maxLength15 = maxLengthValidation(15);
const Textarea = FieldRequiredForm("textarea");

const MyPostsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(null, "textOfPost", "Enter your post message...", Textarea,
                null, [required, maxLength15])}
            <div>
                <button>Add post!</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'posts'})(MyPostsForm);