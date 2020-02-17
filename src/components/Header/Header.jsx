import React from "react";
import st from "./Header.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/userphoto.png";

const Header = props => {

  return (
    <header className={st.header}>
      <div className={st.headerLogo}>
        <img
          src="data:image/png;base64,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"
          alt="some"
        />
      </div>
      <div className={st.authField}>
        {(props.isAuth && !!props.userProfile) ? 
        
        <div className={st.userLog}>
          <div className={st.userAva}><img src={props.userProfile.photos.small != null ? props.userProfile.photos.small : userPhoto} alt="ava"/></div>
          <div>{'Hello, ' + props.login}</div>
        </div> 
          : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
