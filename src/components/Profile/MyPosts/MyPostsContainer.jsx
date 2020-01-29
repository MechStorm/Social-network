import React from "react";
import { addPostCreate, updateNewPostCreate } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let posts = props.store.getState().posts;

  let addPost = () => {
    props.store.dispatch(addPostCreate());
  };

  let updateNewPostText = text => {
    let action = updateNewPostCreate(text);
    props.store.dispatch(action);
  };
  return <MyPosts post={props.post} addPost={addPost} posts={posts} updateNewPostText={updateNewPostText} />;
};

export default MyPostsContainer;