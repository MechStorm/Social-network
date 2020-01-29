import React from "react";
import { NavLink } from "react-router-dom";
import st from "./DialogItem.module.css";

const DialogItem = props => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={st.item}>
      <NavLink activeClassName={st.active} to={path}>
        <img className={st.peopleImg} src={props.img} alt={`${props.name} ${props.lastName}`} title={`${props.name} ${props.lastName}`} />
          {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
