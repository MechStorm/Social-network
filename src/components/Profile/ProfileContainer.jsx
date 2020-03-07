import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getProfileStatus, updateProfileStatus } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userID;
        if(!userID) {
            userID = this.props.autorizedUserID;
        }

        this.props.getProfile(userID);
        this.props.getProfileStatus(userID);
    }

    render(){
        return <Profile {...this.props} />
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
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);