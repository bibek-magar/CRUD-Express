const express = require("express");
const router = express.Router();

const EmployeeController = require("../controller/employeeController");

router.get("/employees", EmployeeController.getEmployees);

router.delete("/employees/:id", function (req, res) {
  EmployeeController.deleteEmployees;
});
router.post("/employees", function (req, res) {
  EmployeeController.addOrUpdateEmployees;
});
router.put("/employees", function (req, res) {
  EmployeeController.addOrUpdateEmployees;
});

module.exports = router;
