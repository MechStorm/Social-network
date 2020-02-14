import React from "react";
import st from "./Users.module.css";
import standartImg from "../../assets/userphoto.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  let totalPagesCount = Math.ceil( props.totalCount / props.pageSize );
  let pages = [];
  for (let i = 1; i <= totalPagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div>
      <div className={st.numbers}>
        {pages.map(p => {
          return <span className={props.currentPage === p && st.activeNum}
              onClick={() => props.onPageChange(p)}>{p}</span>
              })
        }
      </div>
      {props.users.map(u => {
        return <div key={u.id} className={st.usersPage}>
            <div className={st.iconAndStatus}>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : standartImg} alt={"user"} />
                </NavLink>
              </div>
              <div className={st.followBtn}>
                {u.follow ? 
                  <button onClick={() => { props.unfollow(u.id) }}>
                    Unfollow
                  </button>
                 : 
                  <button onClick={() => { props.follow(u.id) }}>
                    Follow
                  </button>
                }
              </div>
            </div>
            <div className={st.userStatus}>
              <div>
                <p>{u.name}</p>
                <p>{u.status}</p>
              </div>

              <div className={st.userLocation}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
      })}
    </div>
  );
};

export default Users;