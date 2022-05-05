// import { useContext } from "react";
// import { AccessContext } from "../../context/AccessContext";

// import classes from "./table.module.scss";

// export const Table = ( {data} ) => {
//   const head = data.head;
//   const body = data.body;
//   console.log(data);
//   const user = useContext(AccessContext);
//   // const employees = [data[user.userId]];
//   // const headData = ["", "1", "2", "3", "4", "5", "6", "7"];

//   const getTd = (employee, day) => {
//     const shifts = employee.shifts;

//     if (shifts[day].length > 0) {
//       // const color = options.find((elem) => elem.position === position).color;
//       return (
//         <td key={`${employee.id}${day}`} className={classes.tableItem}>
//           <div className={`${classes.tableItemTime}`}>{shifts[day]}</div>
//         </td>
//       );
//     }
//     return <td className={classes.tableItem} key={`${employee.id}${day}`}></td>;
//   };

//   const getRow = (employee) => {

//     const row = [];

//     row.push(employee[0].data);
//     for (let i =1; i<7; i++) {

//     }

//       <tr className={classes.tableRow}>
//             {item.map((elem, index) => {
//               <td className={classes.tableItem}>
//                 {elem?.data && elem.col === index ? <div className={`${classes.tableItemTime}`}>{elem.data}</div> : null}
//               </td>
//             })}
//           </tr>
//   }

//   return (
//     <table className={classes.table}>
//       <thead className={classes.tableHead}>
//         <tr>
//           {head.map((item) => (
//             <th
//               className={`${classes.tableItem} ${classes.tableHeadItem}`}
//               key={item}
//             >
//               {item}
//             </th>
//           ))}
//         </tr>
//       </thead>

//       <tbody className={classes.tableBody}>
//         {/* {employees.map((employee) => (
//           <tr className={classes.tableRow} key={employee.id}>
//             <td className={classes.tableItem}>{employee.id}</td>
//             {Object.keys(employee.shifts).map((day) => getTd(employee, day))}
//           </tr>
//         ))} */}
//         {body.map((item) => (
//           {/* <tr className={classes.tableRow}>
//             {item.map((elem, index) => {
//               <td className={classes.tableItem}>
//                 {elem?.data && elem.col === index ? <div className={`${classes.tableItemTime}`}>{elem.data}</div> : null}
//               </td>
//             })}
//           </tr> */}
//         ))}
//       </tbody>
//     </table>
//   );
// };
