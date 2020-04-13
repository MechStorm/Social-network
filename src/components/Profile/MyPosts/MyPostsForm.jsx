import React from "react";
import {reduxForm, reset} from "redux-form";
import {maxLengthValidation, required} from "../../utils/validation";
import {createField, FieldRequiredForm} from "../../utils/FieldLevelValidationForm";

const maxLength15 = maxLengthValidation(15);
const Textarea = FieldRequiredForm("textarea");

const MyPostsForm = ({handleSubmit, reset}) => {
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

const afterSubmit = (res, dispatch) => {
    dispatch(reset('posts'));
};

export default (reduxForm({form: 'posts', onSubmitSuccess: afterSubmit})(MyPostsForm));