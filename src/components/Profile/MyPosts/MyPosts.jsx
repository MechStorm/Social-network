import React from "react";
import st from "./MyPosts.module.css";
import MyPostsForm from "./MyPostsForm";

const MyPosts = props => {

    let sendNewPost = (values) => {
        props.addPost(values.textOfPost);
    }

    return (
        <div className={st.posts}>
            <h2>Posts:</h2>
            <div className={st.newPost}>
                New post
                <div className={st.post}>
                    <MyPostsForm onSubmit={sendNewPost}/>
                </div>
            </div>
            {props.post}
        </div>
    );
}

export default MyPosts;