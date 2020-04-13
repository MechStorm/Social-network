import React from 'react';
import st from "./InfoBlock.module.css";
import ContactsData from "./ContactsData";

const ProfileInfo = ({profile, goToEditMode, isOwner}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}

            <div>
                <b>Full name</b>: {profile.fullName ? profile.fullName : 'not data'}
            </div>

            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>

            <div className={st.contacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(c => {
                return <ContactsData key={c} contactsTitle={c} contactsValue={profile.contacts[c]}/>
            })}
            </div>

            <div>
                <b>looking for a job</b>: {profile.lookingForAJob ? ':)' : ':('}
            </div>

            <div>
                <b>looking for a job description</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'not data'}
            </div>

            <div>
                <b>UserID</b>: {profile.userId ? profile.userId : 'not data'}
            </div>
        </div>
    )
};

export default ProfileInfo;