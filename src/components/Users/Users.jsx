import React from "react";
import st from "./Users.module.css";
import * as axios from "axios";
import standartImg from '../../assets/userphoto.png'

class Users extends React.Component {
  constructor(props) {
    super(props);

  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items);
      });

  let addUsers = (page) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).then(response => {
      this.props.setUsers(response.data.items);
      });
    } 

  let nextPage = () => {
    let page = 2;
    
    return () => {
      return page++;
    }
  }
  
  this.addUsers = addUsers.bind(this);
  this.next = nextPage().bind(this);
  }
 
  render() {
    return(
    <div>      
      {this.props.users.map(u => {
        return (
          <div key={u.id} className={st.usersPage}>
            <div className={st.iconAndStatus}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : standartImg} alt={'user'} />
              </div>
              <div className={st.followBtn}>
                {
                u.follow 
                ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
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
      <button className={st.nextBtn} onClick={() => this.addUsers(this.next())}>Show more</button>
    </div>
    )}
}

export default Users;