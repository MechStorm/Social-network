import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {  followAC,  unfollowAC,  setUsersAC,  setTotalCountAC,  setCurrentPageAC} from "../Redux/users-reducer";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    let onPageChange = pageNumber => {
      this.props.setCurrentPage(pageNumber);

      axios
        .get( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` )
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
    };

    this.onPageChange = onPageChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setTotalCount: totalCount => {
      dispatch(setTotalCountAC(totalCount));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageAC(currentPage));
    }
  };
};

UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UsersContainer;