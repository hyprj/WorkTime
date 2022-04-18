import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Employee, About, NotFound, NavBar, Schedule, Login, Register, Auth, Management } from "./index";
import { AuthContext } from "../context/AuthContext";

const PageRoutes = () => {
  const isLoggedIn = useContext(AuthContext) ? true : false;
  // console.log(useContext(AuthContext).user.isManager)
  const isManager = useContext(AuthContext)?.user.isManager ? true : false;

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/employees/:employeeId" element={<Employee/>}/> */}
        <Route path="/me" element={isLoggedIn ? <Employee/> : <Navigate replace to="/login"/>}/>
        <Route path="/management" element={isManager ? <Management/> : <Navigate replace to="/login"/>}/>
        <Route path="/login" element={isLoggedIn ? <Navigate replace to="/"/> : <Auth><Login/></Auth>}/>
        <Route path="/register" element={<Auth><Register/></Auth>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
