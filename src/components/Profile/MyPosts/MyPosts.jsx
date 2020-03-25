import React from "react";
import st from "./MyPosts.module.css";
import MyPostsForm from "./MyPostsForm";

const MyPosts = React.memo(({addPost, post}) => {

    let sendNewPost = (values) => {
        addPost(values.textOfPost);
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
            {post}
        </div>
    );
});

export default MyPosts;