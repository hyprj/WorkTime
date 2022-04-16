import { Link } from "react-router-dom";

import classes from "../../Routes/Auth/login.module.scss";

const Login = () => {
  return (
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
        minLength="5"
      />
      <button className={classes.loginButton} type="submit">
        Log in
      </button>
      <p className={classes.loginSignup}>
        Don't have an account?{" "}
        <Link to="/register" className={classes.link}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
