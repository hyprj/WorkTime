import { useContext } from "react";
import { AccessContext } from "../../context/AccessContext";
import {EmployeeSummary, classes, Card, EmployeeShift, EmployeeInvitationCode, EmployeeInvitation } from "./index";

export const Employee = () => {
  const employeeData = useContext(AccessContext);
  
  return (
    <div className={classes.employee}>
      {employeeData && <Card title="About me"><EmployeeSummary employee={employeeData.user}/></Card>}
      <Card title="Invitation"><EmployeeInvitationCode id={employeeData.userId}/></Card>
      {employeeData.user?.invitation && <Card title="Invitation"><EmployeeInvitation from={employeeData.user.invitation}/></Card>}
    </div>
  );
};