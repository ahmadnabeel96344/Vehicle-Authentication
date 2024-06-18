const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const employeeVehicleRoutes = require("./routes/EmployeeVehicle")
require("dotenv").config();

const PORT = process.env.PORT || 3000;

//DB connection
database.connect();

// middlewares 
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(cookieParser());
app.use(cors({
    origin: "*", // Allow only the frontend origin
    credentials: true, // Allow credentials if needed
}));

//mount the routes
app.use("/api/v1/employeeVehicle" , employeeVehicleRoutes);

app.get("/" , (req, res) => {
 res.send(`Server is running at PORT ${PORT}`);
})

app.listen(PORT , () => {
    console.log(`Server running at PORT ${PORT}`);
})