import React from "react";
import { useAccess } from "../../context/AccessContext";
import { getCollection } from "../../service/firebase";
import { formatWeekData } from "../../service/utils";
import {
  Section,
  Table,
  useEffect,
  useState,
  getData,
  getWeek,
  WeekNav,
} from "./index";

import { TableHead } from "../../Components/Table/TableHead";
import { TableRow } from "../../Components/Table/tableRow";
import { TableCell } from "../../Components/Table/TableCell";
import { TableCellHead } from "../../Components/Table/tableCellHead";
import { TableBody } from "../../Components/Table/TableBody";

export function Schedule() {
  const { data, setData } = useAccess();
  const [week, setWeek] = useState(getWeek());
  const [tableData, setTableData] = useState();

  // const thead = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  const thead = [
    { name: "display" },
    { text: "Monday,", name: "monday" },
    { text: "Tuesday,", name: "tuesday" },
    { text: "Wednesday,", name: "wednesday" },
    { text: "Thursday,", name: "thursday" },
    { text: "Friday,", name: "friday" },
    { text: "Saturday,", name: "saturday" },
    { text: "Sunday,", name: "sunday" },
  ];

  const fakeData = [
    {
      info: { id: 1 },
      data: { display: "Krzysztof Żurkiewicz", monday: "10:00 - 18:00" },
    },
  ];

  useEffect(() => {
    console.log(data);
    if (!data.shifts.has(week.toDatabase)) {
      getData(
        "organizations",
        "HU0jFXchVqNq1uTZnmIO",
        "shifts",
        week.toDatabase
      ).then((res) => {
        setData((prev) => {
          const updatedShifts = prev.shifts;
          updatedShifts.set(week.toDatabase, res);
          return { ...prev, shifts: updatedShifts };
        });
      });
    }
    const resData = [];
    resData.push(
      data.employees.forEach((e) => {
        const eObj = { info: { id: e.id } };
        let eShifts = [];
        const empId = e.id;
        console.log(data.shifts, empId);
        if (data.shifts.get(week.toDatabase)?.e.id) {
          // eShifts.push(shifts.get(week.toDatabase).e.id)
          eShifts = data.shifts.get(week.toDatabase).e.id;
          console.log(eShifts);
        }
      })
    );
  }, [week]);

  return (
    <Section title="Schedule">
      <WeekNav week={week} setWeek={setWeek} getWeek={getWeek} />
      <Table columns={thead} data={fakeData} />
    </Section>
  );
}

// AdminTable -> <Table isAdmin>
