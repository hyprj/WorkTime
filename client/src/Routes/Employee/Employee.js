import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {EmployeeSummary, classes, Card, EmployeeShift} from "./index";

const Employee = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  const fetchData = () => {
    console.log(employeeId)
    fetch(`http://localhost:3001/api/employees/${employeeId}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data))
      .catch((err) => console.log(err));
  };

  useEffect(fetchData, []);

  return (
    <div className={classes.employee}>
      {employee && <Card title="About me"><EmployeeSummary employee={employee}/></Card>}
      {employee && <Card title="Next shift"><EmployeeShift date={employee["working_time_start"]}/></Card>}
    </div>
  );
};

export default Employee;
