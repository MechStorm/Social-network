import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    statusActivate = () => {
        this.setState({
            editMode: true
        });
    };

    statusDeactivate = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    statusChange = (e) => {
        let text = e.target.value;
        this.setState({
            status: text
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        Status: <span onClick={this.statusActivate}>{this.props.status || 'Status...'} </span>
                    </div>
                    :
                    <div>
                        Status: <input onChange={this.statusChange} autoFocus onBlur={this.statusDeactivate}
                                       value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;