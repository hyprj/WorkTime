import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EmployeeSummary from "./EmployeeSummary";
import classes from "./employee.module.scss";
import EmployeeItem from "./EmployeeItem";
import EmployeeShift from "./EmployeeShift";

const EmployeePage = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  // const [nextShift, setNextShift] = useState(null);

  const fetchData = () => {
    fetch(`http://localhost:3001/api/employees/${employeeId}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data))
      .catch((err) => console.log(err));
  };

  useEffect(fetchData, []);

  return (
    <div className={classes.employee}>
      {employee && <EmployeeItem title="About me"><EmployeeSummary employee={employee}/></EmployeeItem>}
      {employee && <EmployeeItem title="Next shift"><EmployeeShift date={employee["working_time_start"]}/></EmployeeItem>}
    </div>
  );
};

export default EmployeePage;
