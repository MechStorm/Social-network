import React from "react";
import st from "./Users.module.css";

const Users = props => {

  if(props.users.length === 0) {
    props.setUsers([ 
     {
      follow: true,
      id: 1,
      message: "Hey",
      img:
        "https://comiccoverage.typepad.com/photos/uncategorized/2007/05/04/parker.jpg",
      firstName: "Peter",
      lastName: "Parker",
      location: { city: "New York", country: "USA" }
    },
    {
      follow: false,
      id: 2,
      message: "Wow!",
      img:
        "https://i.pinimg.com/originals/23/e0/13/23e013350c4ee8d4b1a36fe02b7b169c.jpg",
      firstName: "Gwen",
      lastName: "Stacy",
      location: { city: "New York", country: "USA" }
    },
    {
      follow: true,
      id: 3,
      message: "Hello",
      img:
        "https://media.wired.com/photos/5c8025dfedfea42f35917d1c/1:1/w_878,h_878,c_limit/Culture_CaptainMarvel7.jpg",
      firstName: "Carol",
      lastName: "Danvers",
      location: { city: "New York", country: "USA" }
    }
  ]);
  }
  
  return (
    <div>
      {props.users.map(u => {
        return (
          <div key={u.id} className={st.usersPage}>
            <div className={st.iconAndStatus}>
              <div>
                <img src={u.img} alt={u.firstName} />
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
                <p>{u.firstName} {u.lastName}</p>
                <p>{u.message}</p>
              </div>

            <div className={st.userLocation}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>
            </div>   
          </div>
        );
      })}
    </div>
  );
};

export default Users;