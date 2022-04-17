import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Employee, About, NotFound, NavBar, Schedule, Login, Register, Auth } from "./index";
import { AuthContext } from "../context/AuthContext";

const PageRoutes = () => {
  const isLoggedIn = useContext(AuthContext) ? true : false;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/employees/:employeeId" element={<Employee/>}/>
        <Route path="/login" element={isLoggedIn ? <Navigate replace to="/"/> : <Auth><Login/></Auth>}/>
        <Route path="/register" element={<Auth><Register/></Auth>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
