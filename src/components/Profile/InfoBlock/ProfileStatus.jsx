import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status || 'status will be here...'
  };

  statusActivate = () => {
      debugger;
      console.log(this);
    this.setState({
      editMode: true
    });
  };

  statusDeactivate = () => {
    this.setState({
      editMode: false
    });
  };

  statusChange = (e) => {
    let text = e.target.value;
    
    this.setState({
        status: text
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? 
          <div>
            Status: <span onClick={this.statusActivate}>{this.state.status}</span>
          </div>
         : 
          <div>
            Status: <input onChange={this.statusChange} autoFocus onBlur={this.statusDeactivate} value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;