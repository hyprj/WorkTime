import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import classes from "./createOrganization.module.scss";
import { fb, postData, postDataWithUID, updateData } from "../../service/firebase";

const Invite = () => {
  const [organizationName, setOrganizationName] = useState("");
  const loggedInUser = useContext(AuthContext);

  const inputHandler = (e) => {
    setOrganizationName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const organization = {
      name: organizationName,
    };

    postDataWithUID(fb.auth, fb.db, "organizations", organization).then(
      (id) => {
        postData(fb.auth, fb.db, `organizations/${id}/users`, {
          [loggedInUser.userId]: "test",
        });
        updateData(fb.db, `users/${loggedInUser.userId}`, {...loggedInUser.user, organization: id});
      }
    );
  };
  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label htmlFor="organization-id">Organization name</label>
      <input
        type="text"
        id="organization-id"
        value={organizationName}
        onChange={inputHandler}
      />
      <input type="submit" value="Create organization" onClick={formHandler} />
    </form>
  );
};

export default Invite;
