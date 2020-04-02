import React, {useState} from 'react';
import st from './Pagination.module.css';

const Pagination = ({totalItemCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let totalPagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(totalPagesCount / portionSize);
    let [portionNum, setPortionNum] = useState(1);
    let leftBorderedNum = (portionNum - 1) * portionSize + 1;
    let rightBorderedNum = portionNum * portionSize;

    return (
        <div>
            <div className={st.numbers}>
                {portionNum > 1 && <button className={st.btnPrev} onClick={() => setPortionNum(portionNum - 1)}>Prev</button>}
                {
                    pages
                        .filter(p => p >= leftBorderedNum && p <= rightBorderedNum)
                        .map(p => <span className={currentPage === p && st.activeNum}
                                        onClick={() => onPageChange(p)}>{p}</span>)
                }
                {portionCount > portionNum && <button className={st.btnNext} onClick={() => setPortionNum(portionNum + 1)}>Next</button>}
            </div>
        </div>
    )
};

export default Pagination;