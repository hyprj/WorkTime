import classes from "../employee.module.scss";

const EmployeeSummary = ({ employee }) => {
  return (
    <>
      <h2
        className={classes[`employee__header`]}
      >{`${employee.firstName} ${employee.lastName}`}</h2>
      <p>{employee?.workplace}</p>
      <p className={classes[`employee__position`]}>{employee.position}</p>
    </>
  );
};

export default EmployeeSummary;
