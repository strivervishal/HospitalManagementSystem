import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pharmacy from "./components/Pharmacy";
import Doctor from "./components/Doctor";
import Appointment from "./components/Appointment";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminPage from "./components/AdminPage";
import AdminRoute from "./components/AdminRoute";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Admin Route */}
      <Route element={<AdminRoute user={user} />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
