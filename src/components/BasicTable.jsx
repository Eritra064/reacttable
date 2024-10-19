import MockData from "./MockData.json";
import { useTable, useSortBy } from "react-table";
import { Columns } from "./columns";
import { useMemo } from "react";
import "../assets/css/TableStyle.css";
import { BsCalendarDate } from "react-icons/bs";
import { PiHandWithdraw } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrStatusUnknown } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const BasicTable = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MockData, []);

  const tableInstance = useTable({
    columns,
    data,
  },useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } =
    tableInstance;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                <span>
                    {column.isSorted ? (column.isSortedDesc? <FaArrowDown /> : <FaArrowUp /> ) : ""}
                </span>
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

                    {
                        row.cells.map((cell) => {
                            return(
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            )
                        })
                    }

                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
