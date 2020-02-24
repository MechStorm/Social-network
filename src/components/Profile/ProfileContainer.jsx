import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../Redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userID;
        if(!userID) {
            userID = 2;
        }
        this.props.getProfile(userID);
    }

    render(){
        if(!this.props.isAuth) return <Redirect to='/login' />
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
const mapStateToProps = state => {
    return { 
        profile: state.profilePage.profile,
        isAuth: state.userAuth.isAuth
     }
}

let ContainerComponentWithURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfile })(ContainerComponentWithURL);

// export default withRouter(connect(mapStateToProps, {profileLoading})(ProfileContainer));