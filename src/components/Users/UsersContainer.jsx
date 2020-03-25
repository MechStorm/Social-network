import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {following, getUsersTC, unfollowing} from "../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getProcess,
    getTotalCount,
    getUsers
} from "../Redux/users-selector";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

        let onPageChange = pageNumber => {
            this.props.getUsersTC(pageNumber, this.props.pageSize);
        };

        this.onPageChange = onPageChange.bind(this);
    }

    componentDidMount() {
        let {getUsersTC, currentPage, pageSize} = this.props;
        getUsersTC(currentPage, pageSize);
    }

    render() {
        let {isFetching, totalCount, pageSize, currentPage, unfollowing, following, users, isProcess} = this.props;
        return (
            <>
                {isFetching ? <Preloader/> : null}
                <Users
                    totalCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.onPageChange}
                    unfollow={unfollowing}
                    follow={following}
                    users={users}
                    isProcess={isProcess}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        isProcess: getProcess(state),
        isAuth: getIsAuth(state)
    };
};

export default compose(
    connect(mapStateToProps, {following, unfollowing, getUsersTC})
)(UsersContainer);