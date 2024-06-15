import { Outlet } from "react-router-dom";
import './App.css'
import GenerateQR from "./components/GenerateQR";
import Home from "./components/Home";
import ScanQR from "./components/ScanQR";

function App() {
  return (
    <>
      
      <Outlet />
      
    </>
  );
}

export default App;
