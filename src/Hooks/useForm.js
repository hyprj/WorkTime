import { useReducer, useRef } from "react";
import { checkValidity } from "../service/utils";

const createInputFields = (fields) => {
  const res = {};
  fields.forEach((field) => {
    if (field.length === 3) {
      res[field[0]] = { value: field[1] };
    } else if (field.length === 2) {
      res[field[0]] = { value: field[1], isValid: false };
    } else {
      throw new Error("Invalid field length");
    }
  });
  return res;
};

const getFormType = (type) => {
  let formType;
  if (type === "login") {
    formType = [
      ["email", ""],
      ["password", ""],
    ];
  } else if (type === "register") {
    formType = [
      ["email", ""],
      ["password", ""],
      ["firstName", ""],
      ["lastName", ""],
      ["isValid", false, false],
      ["isAdmin", false, false],
    ];
  }
  return formType;
};

export const useForm = (type) => {
  const formType = getFormType(type);
  const initialObj = createInputFields(formType);

  console.log("XD");

  const formReducer = (state, action) => {
    if (
      action.type === "USER_INPUT" &&
      Object.prototype.hasOwnProperty.call(action, "exactType")
    ) {
      return {
        ...state,
        [action.field]: { value: action.value, isValid: checkValidity(action) },
      };
    }
    if (action.type === "USER_INPUT") {
      return {
        ...state,
        [action.field]: { value: action.value },
      };
    }
    if (action.type === "FORM_IS_VALID") {
      console.log("halo");
      return { ...state, isValid: { value: true } };
    }
    if (action.type === "FORM_IS_INVALID") {
      return { ...state, isValid: { value: false } };
    }
    return initialObj;
  };

  const [form, dispatchForm] = useReducer(formReducer, initialObj);
  const isMounted = useRef(false);

  return [form, dispatchForm, isMounted];
};
