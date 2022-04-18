import { useContext } from "react";
import { AccessContext } from "../../context/AccessContext";
import {EmployeeSummary, classes, Card, EmployeeShift, EmployeeInvitationCode, EmployeeInvitation } from "./index";

const Employee = () => {
  const employeeData = useContext(AccessContext);
  // console.log(employee);

  return (
    <div className={classes.employee}>
      {employeeData && <Card title="About me"><EmployeeSummary employee={employeeData.user}/></Card>}
      <Card title="Invitation"><EmployeeInvitationCode id={employeeData.userId}/></Card>
      {employeeData.user?.invitation && <Card title="Invitation"><EmployeeInvitation from={employeeData.user.invitation}/></Card>}
      {/* {employee && <Card title="Next shift"><EmployeeShift date={employee["working_time_start"]}/></Card>} */}
    </div>
  );
};

export default Employee;
