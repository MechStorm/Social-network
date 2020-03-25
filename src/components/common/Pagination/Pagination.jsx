import React from 'react';
import st from './Pagination.module.css';

const Pagination = ({totalCount, pageSize, currentPage, onPageChange}) => {
    let totalPagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={st.numbers}>
                {
                    pages.map(p => <span className={currentPage === p && st.activeNum}
                                         onClick={() => onPageChange(p)}>{p}</span>)
                }
            </div>
        </div>
    )
}

export default Pagination;