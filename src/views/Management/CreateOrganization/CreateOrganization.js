import React, { useState } from "react";
import { useAccess } from "../../../context/AccessContext";
import { postData, updateData } from "../../../service/firebase";
import classes from "./createOrganization.module.scss";

export const CreateOrganization = () => {
  const { data } = useAccess();
  const { user } = data;
  const [organizationName, setOrganizationName] = useState("");

  const inputHandler = (e) => {
    setOrganizationName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const organization = {
      name: organizationName,
      manager: user.id,
    };

    postData("organizations", organization).then((id) => {
      const updatedUser = { ...user, organization: id };
      updateData("users", user.id, updatedUser);
    });
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
