import React from "react";
import st from "./Users.module.css";
import * as axios from "axios";
import standartImg from '../../assets/userphoto.png'

class Users extends React.Component {
  constructor(props) {
    super(props);

    let onPageChange = pageNumber => {
      this.props.setCurrentPage(pageNumber);

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
    }
  
  this.onPageChange = onPageChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
      });
  }
 
  render() {
    let totalPagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i<=totalPagesCount; i++) {
      pages.push(i);
    }
    return(
    <div>
      <div className={st.numbers}>
        {pages.map(p => {
        return <span className={this.props.currentPage === p && st.activeNum}
        onClick={() => this.onPageChange(p)}>{p}</span>
        })}
      </div>
      
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
    </div>
    )}
}

export default Users;