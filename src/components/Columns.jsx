import { BsCalendarDate } from "react-icons/bs";
import { PiHandWithdraw } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrStatusUnknown } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import "../assets/css/TableStyle.css";

export const Columns = [
  {
    Header: () => (
      <>
        <BsCalendarDate size={25} /> Date
      </>
    ),
    Footer: "Date",
    accessor: "date",
  },
  {
    Header: () => (
      <>
        <PiHandWithdraw size={25} /> Mode
      </>
    ),
    Footer: "Mode",
    accessor: "mode",
  },
  {
    Header: () => (
      <>
        <GiTakeMyMoney size={25} /> Amount
      </>
    ),
    Footer: "Amount",
    accessor: "amount",
  },
  {
    Header: () => (
      <>
        <GrStatusUnknown size={25} /> Status
      </>
    ),
    Footer: "Status",
    accessor: "status",
    Cell: ({ value }) => {
        // Conditionally render icons and colors based on status
        if (value === "Pending") {
          return (
            <span style={{ color: 'yellow' }}>
              <BsThreeDots /> Pending
            </span>
          );
        } else if (value === "Completed") {
          return (
            <span style={{ color: 'green' }}>
              <TiTick /> Completed
            </span>
          );
        } else {
          return value;
        }
      },
  },
];
