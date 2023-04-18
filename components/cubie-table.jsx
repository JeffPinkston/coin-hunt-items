import { cubieFolder, smallImageFolder } from "@/constants/constants";
import { cubieLoader, getImagePath } from "@/utils/utils";
import Image from 'next/image'
import { memo } from "react";
import { useTable, usePagination } from "react-table";
import Pagination from "./pagination";
import styles from '@/styles/Home.module.css'



const CubieTable = memo(function CubieTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,

        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = useTable({
        columns,
        data,
        initialState: {
          hiddenColumns: ['ID', 'SingleUse', 'Randomizer', 'WillReturn', 'RecipeItem1', 'RecipeQty1', 'RecipeItem2', 'RecipeQty2', 'RecipeItem3', 'RecipeQty3', 'RecipeItem4', 'RecipeQty4', 'HasBP', 'MaximumCubie', 'ReleaseDate', 'FTPPlayer', 'FTPDate', 'Category', 'EventName', 'ReleaseYear', 'ExistingBP', 'MaximumBP', 'FlavorText'],
          pageSize: 10,
          pageIndex: 1,
    
        }},
        usePagination,
    )
    return (
        <>
        <table className={styles.table} {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroup, index) => (
                    <tr key={`header_row_${index}`} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((header, index) => (
                            <th key={`header_cell_${index}`} {...header.getHeaderProps()}>
                                {header.render('Header')}
                            </th>
                        ))}

                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                    prepareRow(row)
                    return (
                        <tr key={`row_${index}`} {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                                return (
                                    <td key={`cell_${index}`} {...cell.getCellProps()}>
                                        {cell.column.Header === 'ImageUrl' 
                                            ? <Image
                                                loader={cubieLoader}
                                                src={cell.row.values.CubieName} 
                                                alt={cell.row.values.CubieName}
                                                width={60}
                                                height={60} /> 
                                            : cell.render('Cell')}
                                    </td>
                                )
                            })}

                        </tr>
                    )

                })}

            </tbody>
        </table>
        <Pagination 
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage} 
            pageCount={pageCount} 
            pageOptions={pageOptions} 
            pageIndex={pageIndex} 
            pageSize={pageSize}
            nextPage={nextPage}
            gotoPage={gotoPage}
            previousPage={previousPage}
            setPageSize={setPageSize} />
        </>
    );
    
})

export default CubieTable;