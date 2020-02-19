import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileLoading } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userID;
        if(!userID) {
            userID = 2;
        }
        userAPI.getProfile(userID).then(data => {
            this.props.profileLoading(data);
        });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}
const mapStateToProps = state => {
    return { 
        profile: state.profilePage.profile
     }
}

let ContainerComponentWithURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, { profileLoading })(ContainerComponentWithURL);

// export default withRouter(connect(mapStateToProps, {profileLoading})(ProfileContainer));