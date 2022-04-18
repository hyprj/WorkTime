const EmployeeInvitation = ({ from }) => {
  const name = from.orgName;
  const id = from.orgId;
  return (<div>{name}</div>);
};

export default EmployeeInvitation;
