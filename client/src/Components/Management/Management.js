import { Card } from "../../Routes/Employee";
import Invite from "./Invite";
import CreateOrganization from "./CreateOrganization";

import classes from "./management.module.scss";

const Management = () => {
  return (
    <div className={classes.container}>
      <section className={classes.managementCards}>
          <Card title="Invite"><Invite/></Card>
          <Card title="Create your organization"><CreateOrganization/></Card>
      </section>
    </div>
  );
};

export default Management;
