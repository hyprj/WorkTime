import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Employee, About, NotFound, NavBar } from "./index";

const PageRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="employees/:employeeId" element={<Employee/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;