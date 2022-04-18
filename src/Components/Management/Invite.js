import { useState } from "react";
import classes from "./invite.module.scss";
import { fb, postData } from "../../service/firebase";

const Invite = ({ orgId }) => {
  const [userId, setUserId] = useState("");

  const inputHandler = (e) => {
    setUserId(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    postData(fb.auth, fb.db, `invitations/${userId}`, orgId);
    setUserId("");
  };
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label htmlFor="user-id">Employee id</label>
      <input type="text" id="user-id" value={userId} onChange={inputHandler} />
      <input type="submit" value="Invite employee" onClick={formHandler} />
    </form>
  );
};

export default Invite;
