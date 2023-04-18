import styles from '@/styles/Home.module.css'
import { memo } from 'react';

const Pagination = memo(function Pagination({canPreviousPage, canNextPage, pageCount, pageOptions, pageIndex, pageSize, nextPage, previousPage, gotoPage, setPageSize}) {
    console.log('Pagination Render')
    return (
        <div className={styles.pagination}>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
            </button>{" "}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {">>"}
            </button>{" "}
            <span>
            Page{" "}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
            </span>
            <span>
            | 
            </span>{" "}
            <select
            value={pageSize}
            onChange={(e) => {
                setPageSize(Number(e.target.value));
            }}
            >
            {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                Show {pageSize}
                </option>
            ))}
            </select>
        </div>
    )
})

export default Pagination;