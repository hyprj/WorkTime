import { useParams } from "react-router-dom";

import {EmployeeSummary, classes, Card, EmployeeShift} from "./index";
import useFetch from "../../Hooks/useFetch";

const Employee = () => {
  const { employeeId } = useParams();

  const { data: employee } = useFetch(`http://localhost:3001/api/employees/${employeeId}`)

  return (
    <div className={classes.employee}>
      {employee && <Card title="About me"><EmployeeSummary employee={employee}/></Card>}
      {employee && <Card title="Next shift"><EmployeeShift date={employee["working_time_start"]}/></Card>}
    </div>
  );
};

export default Employee;
