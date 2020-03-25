import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateProfileStatus}) =>{
  return ( 
    <div className={st.profilePage}>
    <InfoBlock profile={profile} status={status} updateStatus={updateProfileStatus} />
    <MyPostsContainer />
    </div>
    );
  }
  
  export default Profile;