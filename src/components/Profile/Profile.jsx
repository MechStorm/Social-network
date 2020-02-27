import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props =>{
  return ( 
    <div className={st.profilePage}>
    <InfoBlock profile={props.profile} status={props.status} updateStatus={props.updateProfileStatus} />
    <MyPostsContainer />
    </div>
    );
  }
  
  export default Profile;