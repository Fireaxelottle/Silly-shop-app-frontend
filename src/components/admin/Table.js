import React from 'react'
import {
    Column,
    usePagination,
    useSortBy,
    useTable,
    TableOptions,
    ColumnFilter,

  } from "@tanstack/react-table";


import { Link } from 'react-router-dom';  


const Table = ({data, columns, showPagination, CCN , heading}) => {

    const column = React.useMemo(() => columns, [columns]);

    const options = {
      columns,
      data,
      initialState: { pageIndex: 6},

    }


    console.log(column)



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        prepareRow,
        nextPage,
        pageCount,
        state: { pageIndex },
        previousPage,
        canNextPage,
        canPreviousPage,
      } = useTable(options , useSortBy, usePagination);

   
    
      return (
        <div className={CCN}>
          <h3>{heading}</h3>
  
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>
                          {" "}
                          {column.isSortedDesc ? (
                            <i className="fa-solid fa-arrow-down"></i>
                          ) : (
                            <i className="fa-solid fa-arrow-up"></i>
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
  
          {showPagination && (
            <div className="table-pagination">
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
        </div>
      );
}

export default Table
