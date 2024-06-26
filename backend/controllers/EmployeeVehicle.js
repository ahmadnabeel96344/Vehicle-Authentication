const EmployeeVehicle = require("../models/EmployeeVehicle");

exports.addEmployeeVehicle = async(req, res) => {
    try{
           const {employeeID, employeeData} = req.body;

           if(!employeeID || !employeeData){
            return res.status(401).json({
                success:false,
                message:"Please enter all required fields."
            })
           }
          
           const EVInfo = await EmployeeVehicle.findOne({employeeCode:employeeID});

           if(EVInfo){
            return res.status(200).json({
                success:true,
                message:"Employee Vehicle already present.",
                vehicleInfo: EVInfo
            })
           }

           //add employee vehicle
          const newEVInfo =  await EmployeeVehicle.create(employeeData);
          
          return res.status(201).json({
            success:true,
            message:"Employee Vehicle successfully added.",
            vehicleInfo: newEVInfo     
          }) 

    }catch(error){
        console.log("Unable to add vehicle: " , error);
        return res.status(500).json({
            success:false,
            message:"Unable to add vehicle , Please Try again",
             error:error.message
        });
    }
}

exports.getEVInfo = async(req, res) => {
    try{
           const {employeeCode} = req.body;

           if(!employeeCode){
            return res.status(401).json({
                success:false,
                message:"Please enter all required fields."
            })
           }
          
           const EVInfo = await EmployeeVehicle.findOne({employeeCode});

           if(EVInfo){
            return res.status(200).json({
                success:true,
                message:"Access Granted, User Vehicle exists.",
                vehicleInfo: EVInfo
            })
           }

          return res.status(200).json({
            success:true,
            message:"Access Denied, User vehicle does not exist",
            vehicleInfo:null
          })

    }catch(error){
        console.log("Unable to fetch vehicle info " , error);
        return res.status(500).json({
            success:false,
            message:"Unable to fetch vehicle info , Please Try again",
             error:error.message
        });
    }
}