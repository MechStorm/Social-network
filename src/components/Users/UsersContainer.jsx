import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { getUsersTC, following, unfollowing } from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    let onPageChange = pageNumber => {
      this.props.getUsersTC(pageNumber, this.props.pageSize);
    };

    this.onPageChange = onPageChange.bind(this);
  }

  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
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
        unfollow={this.props.unfollowing}
        follow={this.props.following}
        users={this.props.users}
        isProcess={this.props.isProcess}
        isAuth={this.props.isAuth}
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
    isProcess: state.usersPage.toggleIsFollowingProcess,
    isAuth: state.userAuth.isAuth
  };
};

export default connect(mapStateToProps, { following, unfollowing, getUsersTC })(UsersContainer);