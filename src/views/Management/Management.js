import Card from "../../Components/Card/Card";
import Invite from "./Invite/Invite";
import CreateOrganization from "./CreateOrganization/CreateOrganization";
import Table from "../../Components/Table/Table";
import MobileTable from "../../Components/Table/MobileTable";
import useWindowSize from "../../hooks/useWindowSize";

import classes from "./management.module.scss";
import { useContext } from "react";
import { AccessContext } from "../../context/AccessContext";

const Management = () => {
  const windowSize = useWindowSize();
  const userData = useContext(AccessContext);
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
