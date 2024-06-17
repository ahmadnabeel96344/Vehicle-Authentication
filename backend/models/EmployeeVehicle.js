const mongoose = require('mongoose');

const employeeVehicleSchema = new mongoose.Schema(
    {
        employeeCode:{
            type:Number,
            required:[true, "Please add employee code."]
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
        insuranceNumber:{
            type:String,
            // required:[true, "Please add insurance number."]
        },
        vehicleNumber:{
            type:String,
            required:[true, "Please add vehicle number."]
        },
        puc:{
            type:String,
        },
        dlValidity:{
           type:Date,
        },
        rcValidity:{
            type:Date,
         },
        pucValidity:{
            type:Date,
         },
        insuranceValidity:{
            type:Date,
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