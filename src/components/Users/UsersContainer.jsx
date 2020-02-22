import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow,  unfollow,  setUsers,  setTotalCount,  setCurrentPage, toggleIsFetching, toggleIsProcess } from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    let onPageChange = pageNumber => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      userAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalCount(data.totalCount);
      })
    };

    this.onPageChange = onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
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
        isProcess={this.props.isProcess}
        toggleIsProcess={this.props.toggleIsProcess}
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
    isFetching: state.usersPage.isFetching,
    isProcess: state.usersPage.toggleIsFollowingProcess
  };
};

export default connect(mapStateToProps, { 
  follow, unfollow, 
  setUsers, setTotalCount, 
  setCurrentPage, toggleIsFetching,
  toggleIsProcess
})(UsersContainer);