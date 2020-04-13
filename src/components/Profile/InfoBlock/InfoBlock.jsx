import React, {useState} from "react";
import st from "./InfoBlock.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileImg from '../../../assets/userProfile.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoForm from "./ProfileInfoForm";

const InfoBlock = ({profile, status, updateStatus, setUserPhoto, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }

    let onSetPhoto = (e) => {
        if (e.target.files.length) {
            setUserPhoto(e.target.files[0]);
        }
    };

    const dataFromProfile = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false);
        });
    }

    return (
        <div className={st.description}>
            <img src={profile.photos.large != null ? profile.photos.large : profileImg} alt="profileImg"/>
            <ProfileStatusWithHooks className={st.about} status={status} updateStatus={updateStatus}/>
            {isOwner && <input type={"file"} onChange={onSetPhoto}/>}
            {
                editMode ? <ProfileInfoForm initialValues={profile} profile={profile} onSubmit={dataFromProfile}/> :
                <ProfileInfo profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
            }
        </div>
    );
};

export default InfoBlock;