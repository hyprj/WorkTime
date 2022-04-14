import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./routes/About";
import NotFound from "./routes/NotFound";
import Employee from "./Components/Employees/Employee/Employee";

import "./index.scss";
import App from "./App";
import Employees from "./Components/Employees/Employees";

ReactDOM.render(
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="employees" element={<Employees/>}>
          <Route path=":employeeId" element={<Employee/>} />
        </Route>
        <Route path="*" element={NotFound} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);