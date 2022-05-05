import React, { useContext } from "react";

import { AccessContext } from "../../context/AccessContext";
import {
  EmployeeSummary,
  classes,
  Card,
  EmployeeShift,
  EmployeeInvitationCode,
  EmployeeInvitation,
} from "./index";

export const Employee = () => {
  const { savedUser } = useContext(AccessContext);
  const organization = !!savedUser.organization;
  console.log(organization);

  return (
    <div className={classes.employee}>
      <Card title="About me">
        <EmployeeSummary employee={savedUser} />
      </Card>
      {!savedUser.isManager && (
        <Card title="Invitation">
          <EmployeeInvitationCode id={savedUser.id} />
        </Card>
      )}
      {savedUser.invitation && (
        <Card title="Invitation">
          <EmployeeInvitation from />
        </Card>
      )}
      {/* <Card title="Invitation"><EmployeeInvitation from={employeeData.invitation}/></Card> */}
    </div>
  );
};
