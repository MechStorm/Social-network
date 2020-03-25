import React from "react";
import st from "./InfoBlock.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileImg from '../../../assets/userProfile.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const InfoBlock = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  let contacts = profile.contacts;

  return (
    <div>
      <div className={st.description}>
        <img src={profile.photos.large != null ? profile.photos.large : profileImg} alt="profileImg" />
          <ProfileStatusWithHooks className={st.about} status={status} updateStatus={updateStatus} />
        <div className={st.contacts}>
          <ul>Contacts:
            <li>facebook: {contacts.facebook ? contacts.facebook : 'not yet'}</li>
            <li>website: {contacts.website ? contacts.website : 'not yet'}</li>
            <li>vk: {contacts.vk ? contacts.vk : 'not yet'}</li>
            <li>twitter: {contacts.twitter ? contacts.website : 'not yet'}</li>
            <li>instagram: {contacts.instagram ? contacts.instagram : 'not yet'}</li>
            <li>youtube: {contacts.youtube ? contacts.youtube : 'not yet'}</li>
            <li>github: {contacts.github ? contacts.github : 'not yet'}</li>
            <li>mainlink: {contacts.mainlink ? contacts.mainlink : 'not yet'}</li>
          </ul>
        </div>
        <p>looking for a job: {profile.lookingForAJob ? ':)' : ':('}</p>
        <p>looking for a job description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'not data'}</p>
        <p>fullname: {profile.fullName ? profile.fullName : 'not data'}</p>
        <p>UserID: {profile.userId ? profile.userId : 'not data'}</p>
      </div>
    </div>
  );
};

export default InfoBlock;