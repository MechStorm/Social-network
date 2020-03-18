import React, {useState, useEffect} from "react";

const ProfileStatus = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
       setStatus(props.status);
    }, [props.status])

    const statusActivate = () => {
        setEditMode(true);
    };

    const statusDeactivate = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const statusChange = (e) => {
        setStatus(e.target.value)
    };

        return (
            <div>
                {!editMode ?
                    <div>
                        Status: <span onClick={statusActivate}>{props.status || 'Status...'} </span>
                    </div>
                    :
                    <div>
                        Status: <input onChange={statusChange} autoFocus onBlur={statusDeactivate}
                                       value={status} />
                    </div>
                }
            </div>
        );
};

export default ProfileStatus;