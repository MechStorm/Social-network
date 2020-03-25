import React from "react";
import st from "./Users.module.css";
import standartImg from "../../assets/userProfile.png";
import {NavLink} from "react-router-dom";

const User = ({isProcess, follow, unfollow, users}) => {
    return (
        <div>
                <div className={st.usersPage}>
                    <div className={st.iconAndStatus}>
                        <div>
                            <NavLink to={"/profile/" + users.id}>
                                <img src={users.photos.small != null ? users.photos.small : standartImg} alt={"user"}/>
                            </NavLink>
                        </div>

                        <div className={st.followBtn}>
                            {users.followed ?

                                <button className={st.followingBtn} disabled={isProcess.some(id => id === users.id)}
                                        onClick={() => {
                                            unfollow(users.id)
                                        }}>Unfollow</button>
                                :
                                <button className={st.followingBtn} disabled={isProcess.some(id => id === users.id)}
                                        onClick={() => {
                                            follow(users.id)
                                        }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={st.userStatus}>
                        <div>
                            <p>{users.name}</p>
                            <p>{users.status}</p>
                        </div>

                        <div className={st.userLocation}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default User;