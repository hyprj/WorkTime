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
        required
      />
      <input
        className={classes.loginInput}
        name="password"
        placeholder="password"
        type="password"
        minLength="5"
        required
      />
      <input
        className={classes.loginInput}
        name="firstName"
        placeholder="First Name"
        type="text"
        required
      />
      <input
        className={classes.loginInput}
        name="lastName"
        placeholder="Last Name"
        type="text"
        required
      />
      <div className={classes.loginWrapper}>
        <input
          id="isManager"
          name="isManager"
          placeholder="password"
          type="checkbox"
        />
        <label htmlFor="isManager" name="isManager" value="manager">
          Are you Manager?
        </label>
      </div>
      <button className={`${classes.loginButton} ${classes.loginButtonPurple}`} type="submit">
        Sign in
      </button>
      <p className={classes.loginSignup}>
        Already have an acount?{" "}
        <Link to="/login" className={classes.link}>
          Log in
        </Link>
      </p>
    </form>
  );
};

export default Login;
