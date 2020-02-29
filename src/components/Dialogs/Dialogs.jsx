import React from "react";
import st from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessages/NewMessage";

const Dialogs = props => {
  const dialogs = props.dialogs.dialogsData.map(d => (<DialogItem name={d.name} lastName={d.lastName} key={d.id} id={d.id} img={d.img} />));
  const messages = props.dialogs.messagesData.map(m => (<Message message={m.message} name={m.name} key={m.id} id={m.id} img={m.img} />));

  return (
    <div className={st.dialogs}>
      <div className={st.dialog}>{dialogs}</div>
      <div className={st.messages}>
        {messages}
        <NewMessage addMessage={props.addMessage} dialogs={props.dialogs}/>
      </div>
    </div>
  );
};

export default Dialogs;
