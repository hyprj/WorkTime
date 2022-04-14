const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "kadralpha",
});

app.get("/api/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(JSON.stringify("Something went wrong..."));
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get("/api/employees/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT E.name,E.last_name,E.experience,E.is_admin,E.position,O.name AS workplace, S.working_time_start FROM employees E JOIN organisations O on O.id = E.organisation_id  JOIN shifts S ON E.ID = S.employee_id WHERE E.id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(JSON.stringify("Something went wrong..."));
      } else {
        console.log(result[0]);
        res.send(JSON.stringify(result[0]));
      }
    }
  );
});

app.listen(3001);
