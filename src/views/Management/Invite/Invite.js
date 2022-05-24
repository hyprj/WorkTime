import React, { useState, useEffect } from "react";
import { useAccess } from "../../../context/AccessContext";
import { inviteEmployee } from "../../../service/api";

import classes from "./invite.module.scss";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const Invite = ({ orgId, name }) => {
  const { data } = useAccess();
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const res = validateEmail(userEmail);
    if (res !== isValid) setIsValid(res);
    // userEmail.contains("@") ? setIsValid(true) : setIsValid(false);
    // if (userId.length > 5) {
    // setIsValid(true);
    // } else if (isValid) {
    // setIsValid(false);
    // }
  }, [userEmail]);

  const inputHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const orgName = data.organization.name;
    // inviteEmployee(userId, orgName);
  };
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        type="email"
        id="user-id"
        value={userEmail}
        onChange={inputHandler}
        placeholder="Employee email"
        className={classes.form_input}
      />
      <button
        type="submit"
        value="Invite employee"
        onClick={formHandler}
        className={classes.form_submit}
        disabled={!isValid}
      >
        <i className="fa-solid fa-envelope" /> Invite
      </button>
    </form>
  );
};
