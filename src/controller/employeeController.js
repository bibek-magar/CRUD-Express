const mysql = require("mysql");

let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "EmployeeDB",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connection sucessfull !! Datbase");
  } else {
    console.log(
      "Db connection failed \n Error" + JSON.stringify(err, undefined, 2)
    );
  }
});

exports.getEmployees = (req, res) => {
  mysqlConnection.query("SELECT * FROM employee", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
};
exports.deleteEmployees = (req, res) => {
  mysqlConnection.query(
    "DELETE FROM employee WHERE EmpID = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send("Deleted successfully");
      else console.log(err);
    }
  );
};
exports.addEmployees = function (req, res) {
  let emp = req.body;
  let sql =
    "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?; SET @Salary = ?; \
      CALL EmployeeAddOrEdit(@EmpId,@Name,@EmpCode,@Salary);";
  mysqlConnection.query(
    sql,
    [emp.EmpId, emp.Name, emp.EmpCode, emp.Salary],
    (err, rows, field) => {
      if (!err) {
        rows.forEach((element) => {
          if (element.constructor == Array) {
            res.send("Inserted employee id = ", element[0].EmpId);
          }
        });
      } else console.log(err);
    }
  );
};
