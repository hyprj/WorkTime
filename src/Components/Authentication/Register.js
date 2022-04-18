import { useRef } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fb, createUser } from "../../service/firebase";

import classes from "../../Routes/Auth/login.module.scss";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const isManagerRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const auth = fb.auth;

    const db = fb.db;

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created", cred.user);
        const user = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          isManager: isManagerRef.current.checked,
          organization: ""
        };
        createUser(auth, db, user, cred.user.uid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={classes.loginForm}>
      <h2 className={classes.loginTitle}>WorkTime</h2>
      <input
        className={classes.loginInput}
        name="email"
        placeholder="email address"
        type="email"
        ref={emailRef}
        required
      />
      <input
        className={classes.loginInput}
        name="password"
        placeholder="password"
        type="password"
        minLength="5"
        ref={passwordRef}
        required
      />
      <input
        className={classes.loginInput}
        name="firstName"
        placeholder="First Name"
        type="text"
        ref={firstNameRef}
        required
      />
      <input
        className={classes.loginInput}
        name="lastName"
        placeholder="Last Name"
        type="text"
        ref={lastNameRef}
        required
      />
      <div className={classes.loginWrapper}>
        <input
          id="isManager"
          name="isManager"
          placeholder="password"
          ref={isManagerRef}
          type="checkbox"
        />
        <label htmlFor="isManager" name="isManager" value="manager">
          Are you Manager?
        </label>
      </div>
      <button
        className={`${classes.loginButton} ${classes.loginButtonPurple}`}
        type="submit"
        onClick={handleSubmit}
      >
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
