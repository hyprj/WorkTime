import React from "react";
import { getCollection } from "../../service/firebase";
import { formatWeekData } from "../../utils";
import {
  Section,
  Table,
  useEffect,
  useState,
  db,
  getData,
  getWeek,
  WeekNav,
} from "./index";

export function Schedule() {
  // const { savedUser } = useContext(AccessContext);
  const [shifts, setShifts] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [week, setWeek] = useState(getWeek());
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    getData(
      "organizations",
      "HU0jFXchVqNq1uTZnmIO",
      "shifts",
      week.toDatabase
    ).then((data) => {
      console.log(data);
      setShifts(data);
    });
  }, [week]);

  useEffect(() => {
    getData(
      "organizations",
      "HU0jFXchVqNq1uTZnmIO",
      "shifts",
      week.toDatabase
    ).then((data) => {
      console.log(data);
      setShifts(data);
    });
    getCollection("users", ["orgId", "==", "1"]).then((data) =>
      setEmployees(data)
    );
  }, []);

  useEffect(() => {
    if (shifts && employees) {
      const data = formatWeekData(employees, shifts, week);
      console.log(data);
      setTableData(data);
    }
  }, [shifts, employees]);

  // const windowSize = useWindowSize();

  return (
    <Section title="Schedule">
      <WeekNav week={week} setWeek={setWeek} getWeek={getWeek} />
      {/* {windowSize.width > 767
        ? data && <Table data={data} />
        : data && <MobileTable data={data} />} */}
      {/* {tableData && <Table data={tableData} />} */}
    </Section>
  );
}
