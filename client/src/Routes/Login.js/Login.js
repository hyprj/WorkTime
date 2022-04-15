import classes from "./login.module.scss";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <div className={classes.loginContent}>
        </div>
        <form className={classes.loginForm}>
          <h2 className={classes.loginTitle}>WorkTime</h2>
          <input
            className={classes.loginInput}
            name="email"
            placeholder="email address"
            type="email"
          />
          <input
            className={classes.loginInput}
            name="password"
            placeholder="password"
            type="password"
          />
          <button className={classes.loginButton} type="submit">
            Log in
          </button>
          <p className={classes.loginSignup}>Don't have an account? Sign up</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
