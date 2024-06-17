const express = require('express');
const { addEmployeeVehicle } = require('../controllers/EmployeeVehicle');
const router = express.Router();


router.post("/addEV", addEmployeeVehicle)

module.exports = router;