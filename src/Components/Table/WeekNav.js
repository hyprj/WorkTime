import React from "react";
import classes from "./weeknav.module.scss";

export const WeekNav = ({ week, setWeek, getWeek }) => {
  const buttonHandler = (e) => {
    if (e.target.name === "left") {
      const prevWeek = getWeek(week, "previous");
      setWeek(prevWeek);
    } else {
      const nextWeek = getWeek(week, "next");
      setWeek(nextWeek);
    }
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
        <p>{week.toString}</p>
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
