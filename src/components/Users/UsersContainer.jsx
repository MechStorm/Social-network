import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {  followAC,  unfollowAC,  setUsersAC,  setTotalCountAC,  setCurrentPageAC, toggleIsFetchingAC} from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    let onPageChange = pageNumber => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
        .get( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` )
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
    };

    this.onPageChange = onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        users={this.props.users}
      />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UsersContainer;