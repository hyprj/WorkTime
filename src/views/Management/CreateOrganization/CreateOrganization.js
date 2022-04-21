import { useContext, useState } from "react";
import { AccessContext } from "../../../context/AccessContext";
import classes from "./createOrganization.module.scss";
import { auth, db, postData, postDataWithUID, updateData } from "../../../service/firebase";

export const CreateOrganization = () => {
  const [organizationName, setOrganizationName] = useState("");
  const loggedInUser = useContext(AccessContext);

  const inputHandler = (e) => {
    setOrganizationName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const organization = {
      name: organizationName,
    };

    postDataWithUID(auth, db, "organizations", organization).then(
      (id) => {
        postData(auth, db, `organizations/${id}/users`, {
          [loggedInUser.userId]: { ...loggedInUser.user, organization: id},
        });
        updateData(db, `users/${loggedInUser.userId}`, {...loggedInUser.user, organization: id});
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
