const mongoose = require('mongoose');

const employeeVehicleSchema = new mongoose.Schema(
    {
        employeeCode:{
            type:Number,
            required:[true, "Please add employee code."],
            unique: true
        },
        employeeName:{
            type:String,
            required:[true, "Please add employee name."]
        },
        employeeEmail:{
            type:String,
            required:[true, "Please add employee email."]
        },
        licenseNumber:{
            type:String,
            required:[true, "Please add license number."]
        },
        vehicleNumber:{
            type:String,
            required:[true, "Please add vehicle number."],
            unique: true
        },
        dlValidity:{
           type:Date,
        },
        rcValidity:{
            type:Date,
         },
        pucExpiry:{
            type:String,
         },
        insuranceExpiry:{
            type:String,
         },
         vehicleType:{
            type:String,
            enum:["Bike", "Car", "Truck"],
            required:[ true, "Please enter vehicleType"]
         }  
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("EmployeeVehicle" , employeeVehicleSchema);