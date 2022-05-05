import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../service/firebase";

import { AccessContext } from "../../context/AccessContext";

import classes from "./navbar.module.scss";
import { Button } from "../../Components/clickable/Button";

export {
  useContext,
  useState,
  Link,
  signOut,
  auth,
  classes,
  AccessContext,
  Button,
};
