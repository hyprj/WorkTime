import { getCollection, getData } from "./firebase";
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
    // return [weekToFetch, shift];
    return {
      weekToFetch,
      shift,
    };
  } catch (err) {
    throw new Error(err);
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
      fetchShift(organization),
    ]);
    const shifts = new Map([[shift.weekToFetch, shift.shift]]);
    const res = { organization: org, employees, shifts };
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
