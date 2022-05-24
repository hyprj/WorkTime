import React from "react";
import { getWeek } from "../../../service/utils";
import classes from "./weekPickerNav.module.scss";

export const WeekPickerNav = ({ current, setWeek }) => {
  const buttonHandler = (e) => {
    const weekToSet = e.target.name === "left" ? "previous" : "next";
    setWeek(getWeek(current, weekToSet));
  };

  return (
    <div className={classes.nav}>
      <button
        className={`${classes.nav_arrow} ${classes.nav_arrow___left}`}
        onClick={buttonHandler}
        name="left"
        type="button"
      >
        <i className="fa-solid fa-arrow-left" />
      </button>
      <div className={classes.nav_date}>
        <p>{current.toString}</p>
      </div>
      <button
        className={`${classes.nav_arrow} ${classes.nav_arrow___right}`}
        onClick={buttonHandler}
        name="right"
        type="button"
      >
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
};
