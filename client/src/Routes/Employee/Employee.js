import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {EmployeeSummary, classes, Card, EmployeeShift, EmployeeInvitation} from "./index";

const Employee = () => {
  const employee = useContext(AuthContext);
  console.log(employee)

  return (
    <div className={classes.employee}>
      {employee && <Card title="About me"><EmployeeSummary employee={employee}/></Card>}
      <Card title="Invitation"><EmployeeInvitation id={employee.id}/></Card>
      {/* {employee && <Card title="Next shift"><EmployeeShift date={employee["working_time_start"]}/></Card>} */}
    </div>
  );
};

export default Employee;
