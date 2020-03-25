import React from "react";
import User from "./User";
import Pagination from "../common/Pagination/Pagination";

const Users = ({totalCount, pageSize, currentPage, onPageChange, isProcess, follow, unfollow, users}) => {
    return (
        <div>
            <Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            {users.map(u => <User users={u} key={u.id} isProcess={isProcess} follow={follow} unfollow={unfollow}/>)}
        </div>
    );
};

export default Users;