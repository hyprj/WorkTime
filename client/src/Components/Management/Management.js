import { Card } from "../../Routes/Employee";
import Invite from "./Invite";
import CreateOrganization from "./CreateOrganization";
import Table from "../Table/Table";
import MobileTable from "../Table/MobileTable";
import useWindowSize from "../../Hooks/useWindowSize";

import classes from "./management.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Management = () => {
  const windowSize = useWindowSize();
  const userData = useContext(AuthContext);
  const hasOrganization = userData.user.organization.length > 0;

  return (
    <div className={classes.container}>
      <section className={classes.managementCards}>
          {hasOrganization && <Card title="Invite"><Invite orgId={userData.user.organization}/></Card>}
          {!hasOrganization && <Card title="Create your organization"><CreateOrganization/></Card>}
          {/* { windowSize.width > 767 ? <Table headData={tHeadData} bodyData={employeesShifts} options={organisationPositions}/> : <MobileTable headData={tHeadData} bodyData={employeesShifts} options={organisationPositions}/>} */}
      </section>
    </div>
  );
};

export default Management;
