const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const evAPI = {
    ADD_EMPLOYEE_VEHICLE_API: BASE_URL + "employeeVehicle/addEV",
    GET_EMPLOYEE_VEHICLE_INFO_API: BASE_URL + "employeeVehicle/getEVInfo"
}