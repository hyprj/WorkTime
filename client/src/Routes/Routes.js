import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Employee, About, NotFound, NavBar, Schedule, Login, Register, Auth } from "./index";

const PageRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/employees/:employeeId" element={<Employee/>}/>
        <Route path="/login" element={<Auth><Login/></Auth>}/>
        <Route path="/register" element={<Auth><Register/></Auth>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
