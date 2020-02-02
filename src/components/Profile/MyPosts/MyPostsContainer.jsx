import React from "react";
import { addPostCreate, updateNewPostCreate } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import Post from './Posts/Post';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    post: state.posts.postData.map(p => (
      <Post message={p.message} key={p.id} img={p.img} likeCount={p.likeCount} />
    )),
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostCreate());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostCreate(text);
      dispatch(action);
      }
    }
  };

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;