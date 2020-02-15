import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { profileLoading } from '../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userID = this.props.match.params.userID;
        if(!userID) {
            userID = 2;
        }
        debugger;
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            this.props.profileLoading(response.data);
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