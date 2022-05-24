import React from "react";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, getCollection, getData, updateData } from "./firebase";
import { getCurrentWeek } from "./utils";

export const fetchOrganization = async (id) => {
  try {
    const organization = await getData("organizations", id);
    return organization;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchEmployees = async (orgId) => {
  try {
    const employees = await getCollection("users", [
      "organization",
      "==",
      orgId,
    ]);
    return employees;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchShift = async (id, week) => {
  let weekToFetch = week;
  if (weekToFetch === undefined) {
    weekToFetch = getCurrentWeek().toDatabase;
  }
  try {
    const shift = await getData("organizations", id, "shifts", weekToFetch);
    return shift;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchUser = async ({ uid }) => {
  try {
    const user = await getData("users", uid);
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchAdditionalUserData = async ({ organization }) => {
  try {
    const [org, employees, shift] = await Promise.all([
      fetchOrganization(organization),
      fetchEmployees(organization),
    ]);
    const res = { organization: org, employees };
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const handleAuthChange = async (userAuth) => {
  try {
    const user = await fetchUser(userAuth);
    const additionalUserData = await fetchAdditionalUserData(user);
    return { user, ...additionalUserData };
  } catch (err) {
    throw new Error(err);
  }
};

export const inviteEmployee = async (id, orgName, orgId) => {
  try {
    const user = await getData("users", id);
    user.invitation = { orgName, orgId };
    updateData("users", id, user);
  } catch (err) {
    console.log(err);
  }
};

// export const prepareTableData = ({ employees, shifts }, weekToFetch) => {
//   const res = employees.map((e) => {
//     const data = { display: `${e.firstName} ${e.lastName}` };
//     // shifts.get(weekToFetch)
//     for (const shift of shifts.get(weekToFetch)[e.id]) {
//       console.log("xd");
//     }
//     const info = { id: e.id };
//     // const shift = shifts.get(weekToFetch)[e.id];
//     return { data, info };
//   });
//   return res;
// };
