import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Employee, About, NotFound, Navbar, Schedule, LoginForm, RegisterForm, Access, Management, AccessContext } from "./index";


const PageRoutes = () => {
  const isLoggedIn = useContext(AccessContext) ? true : false;
  const isManager = useContext(AccessContext)?.user.isManager ? true : false;

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/me" element={isLoggedIn ? <Employee/> : <Navigate replace to="/login"/>}/>
        <Route path="/management" element={isManager ? <Management/> : <Navigate replace to="/login"/>}/>
        <Route path="/login" element={isLoggedIn ? <Navigate replace to="/"/> : <Access><LoginForm/></Access>}/>
        <Route path="/register" element={<Access><RegisterForm/></Access>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
