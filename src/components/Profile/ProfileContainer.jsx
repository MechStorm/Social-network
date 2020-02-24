import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userID;
        if(!userID) {
            userID = 2;
        }
        this.props.getProfile(userID);
    }

    render(){
        return <Profile {...this.props} />
    }
}
const mapStateToProps = state => {
    return { 
        profile: state.profilePage.profile,
     };
};

let ContainerComponentWithURL = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, { getProfile })(ContainerComponentWithURL));

// export default withRouter(connect(mapStateToProps, {profileLoading})(ProfileContainer));