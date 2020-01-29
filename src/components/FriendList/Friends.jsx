import React from "react";
import st from "./Friends.module.css";

const Friends = props => {
  return (
    <div className={st.peopleCell}>
      <a className={st.friendAva} href="https://yandex.ru" title={`${props.name} ${props.lastName}`}>
        <img src={props.img} alt="some"></img>
      </a>
      <div className={st.peopleCellName}>
        <a href="https://yandex.ru" title={`${props.name} ${props.lastName}`}>
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default Friends;
