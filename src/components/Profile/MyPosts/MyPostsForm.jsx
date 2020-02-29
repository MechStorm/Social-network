import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPostsForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"textOfPost"} placeholder={"Enter your post message..."} />
            </div>
            <div>
                <button>Add post!</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'posts'})(MyPostsForm);