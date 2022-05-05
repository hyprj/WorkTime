import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

import { auth } from "../../../service/firebase";
import classes from "../access.module.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    const { name } = event.target;
    if (name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User logged in!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={classes.loginForm}>
      <h2 className={classes.loginTitle}>WorkTime</h2>
      <input
        className={classes.loginInput}
        name="email"
        placeholder="email address"
        value={email}
        onChange={handleInput}
        type="email"
      />
      <input
        className={classes.loginInput}
        name="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={handleInput}
        minLength="5"
      />
      <button
        className={classes.loginButton}
        type="submit"
        onClick={handleSubmit}
      >
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
