import React from 'react';
import st from './Profile.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({profile, status, updateProfileStatus, setUserPhoto, isOwner, saveProfile}) =>{
  return ( 
    <div className={st.profilePage}>
    <InfoBlock profile={profile} status={status} updateStatus={updateProfileStatus} isOwner={isOwner} setUserPhoto={setUserPhoto} saveProfile={saveProfile} />
    <MyPostsContainer />
    </div>
    );
  }
  
  export default Profile;