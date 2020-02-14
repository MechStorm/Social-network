import React from "react";
import st from "./InfoBlock.module.css";
import Preloader from "../../common/Preloader/Preloader";

const InfoBlock = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  let contacts = props.profile.contacts;

  return (
    <div>
      <div className={st.infoImg}>
        <img
          src="https://2.bp.blogspot.com/-pjNTgmD8aqo/XQAJpkScAYI/AAAAAAAAHEQ/WxRLvWmK_qQnljRCVBsKF23zuKQhdlMrACKgBGAs/w3840-h1600-p-k-no-nu/star-wars-jedi-fallen-order-uhdpaper.com-4K-23.jpg"
          alt="infoBlock pict"
        />
      </div>
      <div className={st.description}>
        <img src={props.profile.photos.large} alt="profileImg" />
        <div className={st.about}>
          about: {props.profile.aboutMe}
        </div>
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
        <p>looking for a job: {props.profile.lookingForAJob ? ':)' : ':('}</p>
        <p>looking for a job description: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'not data'}</p>
        <p>fullname: {props.profile.fullName ? props.profile.fullName : 'not data'}</p>
        <p>UserID: {props.profile.userId ? props.profile.userId : 'not data'}</p>
      </div>
    </div>
  );
};

export default InfoBlock;