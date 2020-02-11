import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC } from '../Redux/users-reducer';

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;