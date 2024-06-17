const express = require('express');
const { addEmployeeVehicle, getEVInfo } = require('../controllers/EmployeeVehicle');
const router = express.Router();


router.post("/addEV", addEmployeeVehicle);
router.post("/getEVInfo", getEVInfo)

module.exports = router;