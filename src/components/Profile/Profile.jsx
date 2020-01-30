import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () =>{
  return ( 
    <div className={st.profilePage}>
    <InfoBlock />
    <MyPostsContainer />
    </div>
    );
  }
  
  export default Profile;