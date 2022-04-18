import classes from "./login.module.scss";

const Auth = (props) => {
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

export default Auth;