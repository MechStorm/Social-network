import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile, getProfileStatus, saveProfile, setUserPhoto, updateProfileStatus} from '../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let {getProfile, getProfileStatus} = this.props;
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizedUserID;
            if (!userID) {
                this.props.history.push('/login');
            }
        }

        /*if (userID) {
            this.props.history.push(`/profile/${userID}`);
        }*/

        getProfile(userID);
        getProfileStatus(userID);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userID} />
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.userAuth.isAuth,
        autorizedUserID: state.userAuth.id
    };
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, setUserPhoto, saveProfile}),
    withRouter
)(ProfileContainer);