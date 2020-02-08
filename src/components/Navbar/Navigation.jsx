import React from "react";
import st from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../FriendList/Friends";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const friendList = this.props.sidebar.friendList.map(f => (
    <Friends name={f.name} key={f.id} img={f.img} id={f.id} lastName={f.lastName} />
  ));
  return (
    <nav className={st.nav}>
      <div className={st.item}>
        <NavLink to="/profile" activeClassName={st.active}>
          Profile
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/dialogs" activeClassName={st.active}>
          Messages
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/news" activeClassName={st.active}>
          News
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/music" activeClassName={st.active}>
          Music
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/settings" activeClassName={st.active}>
          Settings
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/users" activeClassName={st.active}>
          Users
        </NavLink>
      </div>
      <div className={`${st.item} ${st.friends}`}>
        <NavLink to="/friends" activeClassName={st.active}>
          Friends
        </NavLink>
        <div className={st.friendsAva}>{friendList}</div>
      </div>
    </nav>
  );
  }
}

export default Navigation;