import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import Post from './MyPosts/Posts/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) =>{
  const post = props.posts.postData.map(p => (<Post message={p.message} img={p.img} likeCount={p.likeCount} />));
  return ( 
    <div className={st.profilePage}>
    <InfoBlock />
    <MyPostsContainer post={ post } store={props.store} />
    </div>
    );
  }
  
  export default Profile;