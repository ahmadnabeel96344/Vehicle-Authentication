
import toast from 'react-hot-toast';
import { evAPI } from '../apis';
import { apiConnector } from '../apiConnector';

const {
  ADD_EMPLOYEE_VEHICLE_API
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
  