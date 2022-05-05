import React, { useContext } from "react";
import { Card } from "../../Components/Card/Card";
import { Invite } from "./Invite/Invite";
import { CreateOrganization } from "./CreateOrganization/CreateOrganization";
import { Table } from "../../Components/Table/Table";
import { MobileTable } from "../../Components/Table/MobileTable";
import { useWindowSize } from "../../hooks/useWindowSize";

import classes from "./management.module.scss";
import { AccessContext, useAccess } from "../../context/AccessContext";

export const Management = () => {
  // const windowSize = useWindowSize();
  // const user = useContext(AccessContext);
  const { user } = useAccess().data;
  const hasOrganization = !!user.organization;

  return (
    <div className={classes.container}>
      <section className={classes.managementCards}>
        {hasOrganization && (
          <Card title="Invite">
            <Invite orgId={user.organization} />
          </Card>
        )}
        {!hasOrganization && (
          <Card title="Create your organization">
            <CreateOrganization />
          </Card>
        )}
        {/* { windowSize.width > 767 ? <Table headData={tHeadData} bodyData={employeesShifts} options={organisationPositions}/> : <MobileTable headData={tHeadData} bodyData={employeesShifts} options={organisationPositions}/>} */}
      </section>
    </div>
  );
};
