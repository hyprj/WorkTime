import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/UI/NavBar";

// const fetchData = (id) => {
//   let link;
//   if (id) link = `http://localhost:3001/api/employees/${id}`;
//   else link = "http://localhost:3001/api/employees";
//   fetch(link)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

function App() {
  // const [id, setId] = useState("");

  // const inputHandler = (event) => {
  //   setId(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   fetchData(id);
  // };

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;