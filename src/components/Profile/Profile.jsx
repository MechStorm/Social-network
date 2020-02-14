import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props =>{
  debugger;
  return ( 
    <div className={st.profilePage}>
    <InfoBlock profile={props.profile}/>
    <MyPostsContainer />
    </div>
    );
  }
  
  export default Profile;