import React from 'react';
import st from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoBlock from './InfoBlock/InfoBlock';
import Post from './MyPosts/Posts/Post';

const Profile = (props) =>{
  const post = props.posts.postData.map(p => (<Post message={p.message} img={p.img} likeCount={p.likeCount} />));
  return ( 
    <div className={st.profilePage}>
    <InfoBlock />
    <MyPosts post={ post } dispatch={props.dispatch} posts={props.posts}/>
    </div>
    );
  }
  
  export default Profile;