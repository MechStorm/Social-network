import React from "react";
import {reduxForm} from "redux-form";
import {createField, FieldRequiredForm} from "../../utils/FieldLevelValidationForm";
import st from './ContactsData.module.css';
import e from '../../common/Errors/Errors.module.css';

const Input = FieldRequiredForm("input");

const ProfileInfoForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button>Save</button>
            </div>

            {
                error && <div className={e.errMsg}>
                    {error}
                </div>
            }

            {
                createField("Full name", "fullName", "Name", Input, {type: "text"}, null)
            }
            {
                createField("About me", "aboutMe", "About me", Input, {type: "text"}, null)
            }
            Contacts: {
            Object.keys(profile.contacts).map(key => <div className={st.contacts} key={key}>
                {createField(key, "contacts." + key, key, Input, {type: "text"}, null)}
            </div>)
        }
            Looking for a job: {
            createField(null, "lookingForAJob", null, Input, {type: "checkbox"}, null)
        }
            {
                createField("Looking for a job description", "lookingForAJobDescription", "Description of a job", Input, {type: "text"}, null)
            }

        </form>
    )
};

export default reduxForm({form: "edit-profile"})(ProfileInfoForm);