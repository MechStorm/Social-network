import React from "react";
import st from "./Message.module.css";

const Message = props => {
  return (
    <div className={st.message}>
      <div>
        <a className={st.peopleAva} href="https://yandex.ru" title={props.name}>
          <img src={props.img} alt={props.name} />
        </a>
          {props.message}
      </div>  
    </div>
  );
};

export default Message;
