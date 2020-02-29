import React from "react";
import { addPost } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import Post from './Posts/Post';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    post: state.profilePage.postData.map(p => (
      <Post message={p.message} key={p.id} img={p.img} likeCount={p.likeCount} />
    )),
    posts: state.profilePage
  }
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;