import React from 'react';
import st from './ContactsData.module.css';

const ContactsData = ({contactsTitle, contactsValue}) => {
    return <div className={st.contacts}><b>{contactsTitle}</b>: {contactsValue}</div>
};

export default ContactsData;