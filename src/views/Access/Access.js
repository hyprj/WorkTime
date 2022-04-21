import classes from "./access.module.scss";

export const Access = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.loginContent}>
        </div>
        {props.children}
      </div>
    </div>
  );
};