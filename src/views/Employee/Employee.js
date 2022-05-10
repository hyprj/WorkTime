import React from "react";

import { useAccess } from "../../context/AccessContext";

import {
  EmployeeSummary,
  classes,
  Card,
  EmployeeShift,
  EmployeeInvitationCode,
  EmployeeInvitation,
} from "./index";

export const Employee = () => {
  const { data } = useAccess();
  const { user } = data;

  return (
    <div className={classes.employee}>
      <Card title="About me">
        <EmployeeSummary employee={user} />
      </Card>
      {!user.isManager && (
        <Card title="Invitation">
          <EmployeeInvitationCode id={user.id} />
        </Card>
      )}
      {user.invitation && (
        <Card title="Invitation">
          <EmployeeInvitation from />
        </Card>
      )}
      {/* <Card title="Invitation"><EmployeeInvitation from={employeeData.invitation}/></Card> */}
    </div>
  );
};
