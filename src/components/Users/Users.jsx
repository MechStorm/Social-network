import React from "react";
import st from "./Users.module.css";
import * as axios from "axios";
import standartImg from '../../assets/userphoto.png'

const Users = props => {

  if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      debugger;
      props.setUsers(response.data.items);
    });
  }
  
  return (
    <div>
      {props.users.map(u => {
        return (
          <div key={u.id} className={st.usersPage}>
            <div className={st.iconAndStatus}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : standartImg} alt={'user'} />
              </div>
              <div className={st.followBtn}>
                {
                u.follow 
                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                }
              </div>
            </div>
            <div className={st.userStatus}>
              <div>
                <p>{u.name}</p>
                <p>{u.status}</p>
              </div>

            <div className={st.userLocation}>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
            </div>   
          </div>
        );
      })}
    </div>
  );
};

export default Users;