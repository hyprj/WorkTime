import React, { useEffect, useState } from "react";
import { WeekPickerNav } from "./utils/WeekPickerNav";
import { useAccess } from "../../context/AccessContext";
import { getWeek } from "../../service/utils";
import { Table } from "../Table/Table";
import { Modal } from "../Modal/Modal";

import classes from "./shifts.module.scss";
import { fetchShift } from "../../service/api";

const prepareRowData = (employees, shifts) => {
  // console.log(shifts);
  const data = [];
  employees.forEach((e) => {
    const res = {
      info: { id: e.id },
      data: shifts?.[e.id] ? shifts[e.id] : {},
    };
    res.data.display = { toString: `${e.firstName} ${e.lastName}` };
    data.push(res);
  });

  console.log("data", data);
  return data;
};

export const Shifts = ({ editable }) => {
  const { data } = useAccess();
  const { employees } = data;
  const [week, setWeek] = useState(getWeek());
  const [shifts, setShifts] = useState(new Map());
  const [currentShift, setCurrentShift] = useState(null);

  useEffect(() => {
    if (shifts.get(week.toDatabase)) {
      // const currShift = prepareRowData(employees, shifts.get(week.toDatabase));
      setCurrentShift(shifts.get(week.toDatabase));
      // console.log(currShift, week.toDatabase);
    } else {
      fetchShift(data.user.organization, week.toDatabase).then((res) => {
        const currShift = prepareRowData(employees, res);
        setShifts((prev) => prev.set(week.toDatabase, currShift));
        setCurrentShift(currShift);
      });
    }
  }, [week]);

  const fakeData = [
    {
      info: { id: 1 },
      data: { display: "Krzysztof Żurkiewicz", monday: "10:00 - 18:00" },
    },
    {
      info: { id: 1 },
      data: { display: "Krzysztof Żurkiewicz", monday: "10:00 - 18:00" },
    },
    {
      info: { id: 1 },
      data: { display: "Krzysztof Żurkiewicz", monday: "10:00 - 18:00" },
    },
    {
      info: { id: 1 },
      data: { display: "Krzysztof Żurkiewicz", monday: "10:00 - 18:00" },
    },
  ];

  const thead = [
    { name: "display" },
    { text: "Monday", name: "monday" },
    { text: "Tuesday", name: "tuesday" },
    { text: "Wednesday", name: "wednesday" },
    { text: "Thursday", name: "thursday" },
    { text: "Friday", name: "friday" },
    { text: "Saturday", name: "saturday" },
    { text: "Sunday", name: "sunday" },
  ];

  return (
    <div className={classes.shifts_container}>
      <WeekPickerNav current={week} setWeek={setWeek} />
      {currentShift && (
        <Table editable={editable} columns={thead} data={currentShift} />
      )}
      {editable && <Modal />}
    </div>
  );
};
