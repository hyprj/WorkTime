import React from "react";
import { Card } from "../../Components/Card/Card";
import { Invite } from "./Invite/Invite";
import { CreateOrganization } from "./CreateOrganization/CreateOrganization";
import { Table } from "../../Components/Table/Table";
import { MobileTable } from "../../Components/Table/MobileTable";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Section } from "../../layout/Section";
import { Shifts } from "../../Components/Shifts/Shifts";

import classes from "./management.module.scss";
import { useAccess } from "../../context/AccessContext";

export const Management = () => {
  const { data } = useAccess();
  const { user } = data;
  const hasOrganization = !!user.organization;

  return (
    <Section title="Management">
      <div className={classes.management_container}>
        <section className={classes.management_cards}>
          {hasOrganization && (
            <Card title="Invite">
              <Invite orgId={user.organization} name={data.organization.name} />
            </Card>
          )}
          {!hasOrganization && (
            <Card title="Create your organization">
              <CreateOrganization />
            </Card>
          )}
        </section>
        {hasOrganization && <Shifts />}
      </div>
    </Section>
  );
};
