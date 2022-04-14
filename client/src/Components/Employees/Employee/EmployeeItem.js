import classes from "./employeeItem.module.scss";

const EmployeeItem = (props) => {
  return (
    <div className={classes.item}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default EmployeeItem;
