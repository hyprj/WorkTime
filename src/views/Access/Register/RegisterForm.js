import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, postDatawithUID } from "../../../service/firebase";
import { Button } from "../../../layout/Navbar";

import classes from "../access.module.scss";
import { useForm } from "../../../hooks/useForm";

export const RegisterForm = () => {
  const [form, dispatchForm] = useForm("register");
  const isMounted = useRef(true);

  const { isValid: emailIsValid } = form.email;
  const { isValid: passwordIsValid } = form.password;
  const { isValid: firstNameIsValid } = form.firstName;
  const { isValid: lastNameIsValid } = form.lastName;

  useEffect(() => {
    if (!isMounted.current) {
      if (
        emailIsValid &&
        passwordIsValid &&
        firstNameIsValid &&
        lastNameIsValid
      ) {
        dispatchForm({ type: "FORM_IS_VALID" });
      } else {
        dispatchForm({ type: "FORM_IS_INVALID" });
      }
    }
    isMounted.current = false;
  }, [emailIsValid, passwordIsValid, firstNameIsValid, lastNameIsValid]);

  const handleInput = (event) => {
    dispatchForm({
      type: "USER_INPUT",
      value: event.target.value,
      field: event.target.name,
      exactType: event.target.type,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then((cred) => {
        const user = {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          isManager: form.isAdmin.checked,
          email: form.email.value,
          organization: "",
          id: cred.user.uid,
          invitation: null,
        };
        postDatawithUID(db, "users", cred.user.uid, user);
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
        onChange={handleInput}
        value={form.email.value}
        required
      />
      <input
        className={classes.loginInput}
        name="password"
        placeholder="password"
        type="password"
        value={form.password.value}
        onChange={handleInput}
        required
      />
      <input
        className={classes.loginInput}
        name="firstName"
        placeholder="First Name"
        type="text"
        value={form.firstName.value}
        onChange={handleInput}
        required
      />
      <input
        className={classes.loginInput}
        name="lastName"
        placeholder="Last Name"
        type="text"
        value={form.lastName.value}
        onChange={handleInput}
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
      <Button
        onClick={handleSubmit}
        type="submit"
        disabled={!form.isValid.value}
      >
        Sign In
      </Button>
      <p className={classes.loginSignup}>
        Already have an acount?&nbsp;
        <Link to="/login" className={classes.link}>
          Log in
        </Link>
      </p>
    </form>
  );
};
