import React from "react";
import { Link } from "react-router-dom";

import classes from "./linkTo.module.scss";

export const LinkTo = ({ children, color, decoration, to, onClick }) => {
  const linkColor = color || "";
  const linkDecoration = `link___${decoration}` || "";

  return (
    <Link
      onClick={onClick}
      to={to}
      className={`${classes.link} ${classes[linkColor]} ${classes[linkDecoration]}`}
    >
      {children}
    </Link>
  );
};
