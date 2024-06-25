
import toast from 'react-hot-toast';
import { evAPI } from '../apis';
import { apiConnector } from '../apiConnector';

const {
  ADD_EMPLOYEE_VEHICLE_API,
  GET_EMPLOYEE_VEHICLE_INFO_API
} = evAPI;


export const addEmployeeVehicle = async (data) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    console.log("URL - ", ADD_EMPLOYEE_VEHICLE_API)
    try {
      const response = await apiConnector(
        "POST",
        ADD_EMPLOYEE_VEHICLE_API,
        data
      );
  
      if (!response?.data?.success) {
        throw new Error("Unable to add employee vehicle");
      }
      console.log(" ADD_EMPLOYEE_VEHICLE_API_RESPONSE  - ", response);
      toast.success("Vehicle added")
      result = response?.data?.vehicleInfo;
    } catch (error) {
      console.error(" ADD_EMPLOYEE_VEHICLE_API_RESPONSE  - ", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
  };

  export const fetchEVInfo = async (employeeCode) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "POST",
        GET_EMPLOYEE_VEHICLE_INFO_API,
        {employeeCode: employeeCode}
      );
  
      if (!response?.data?.success) {
        throw new Error("Unable to fetch employee vehicle details");
      }
      console.log(" GET_EMPLOYEE_VEHICLE_INFO_API_RESPONSE  - ", response);
      result = response?.data?.vehicleInfo !== null ? response?.data?.vehicleInfo : {};

      // if(result){
      //   toast.success("Access Granted")
      // }else{
      //   toast.error("Access Denied")
      // }
    } catch (error) {
      console.error("  GET_EMPLOYEE_VEHICLE_INFO_API_RESPONSE_RESPONSE  - ", error);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
  };
  