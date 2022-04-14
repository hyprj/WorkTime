import classes from "../../../Routes/Employee/employee.module.scss";

const EmployeeSummary = ({ employee }) => {
  return (
    <>
      <h2
        className={classes[`employee__header`]}
      >{`${employee.name} ${employee.last_name}`}</h2>
      <p>{employee.workplace}</p>
      <p className={classes[`employee__position`]}>{employee.position}</p>
    </>
  );
};

export default EmployeeSummary;
