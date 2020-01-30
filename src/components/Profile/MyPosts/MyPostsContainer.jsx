import React from "react";
import { addPostCreate, updateNewPostCreate } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import Post from './Posts/Post';
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
  { value => {
        let posts = value.getState().posts;
        const post = posts.postData.map(p => (
          <Post message={p.message} img={p.img} likeCount={p.likeCount} />
        ));

        let addPost = () => {
          value.dispatch(addPostCreate());
        };

        let updateNewPostText = text => {
          let action = updateNewPostCreate(text);
          value.dispatch(action);
        };

        return <MyPosts post={post} addPost={addPost} posts={posts} updateNewPostText={updateNewPostText} />
      }
  }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;