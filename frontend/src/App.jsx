import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pharmacy from "./components/Pharmacy";
import Doctor from "./components/Doctor";
import Appointment from "./components/Appointment";
import Patient from "./components/Patient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
      </Routes>
    </>
  );
}

export default App;
