import React, { useEffect, useState } from "react";
import { WeekPickerNav } from "./utils/WeekPickerNav";
import { useAccess } from "../../context/AccessContext";
import { getWeek } from "../../service/utils";
import { Table } from "../Table/Table";
import { Modal } from "../Modal/Modal";

import classes from "./shifts.module.scss";
import { fetchShift } from "../../service/api";

const getTableData = (employees, shifts) => {
  return employees.map((employee) => {
    return {
      info: { id: employee.id },
      data: {
        display: { toString: `${employee.firstName} ${employee.lastName}` },
        ...shifts?.[employee.id],
      },
    };
  });
};

export const Shifts = ({ editable }) => {
  const { data } = useAccess();
  const { employees } = data;
  const [week, setWeek] = useState(getWeek());
  const [shifts, setShifts] = useState(new Map());
  const [currentShift, setCurrentShift] = useState(null);
  // const []

  useEffect(() => {
    if (shifts.get(week.toDatabase)) {
      setCurrentShift(shifts.get(week.toDatabase));
    } else {
      fetchShift(data.user.organization, week.toDatabase).then((res) => {
        const currShift = getTableData(employees, res);
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
      {/* {editable && } */}
      {editable && <Modal />}
    </div>
  );
};
