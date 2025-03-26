import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pharmacy from "./components/Pharmacy";
import Doctor from "./components/Doctor";
import Appointment from "./components/Appointment";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminPage from "./components/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Charts from "./components/Charts"; // ✅ Import Charts
import HelpCenter from "./components/HelpCenter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* Protected Doctor Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["doctor", "admin"]}
            alertMessage="You are not a doctor, so you can't access this page."
          />
        }
      >
        <Route path="/doctor" element={<Doctor />} />
      </Route>

      {/* Protected Appointment Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["patient", "admin"]}
            alertMessage="You are not a patient, so you can't book an appointment."
          />
        }
      >
        <Route path="/appointment" element={<Appointment />} />
      </Route>

      <Route path="/patient" element={<Patient />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Admin Route */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["admin"]}
            alertMessage="You are not an admin."
          />
        }
      >
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* ✅ Separate Charts Page Route */}
      <Route path="/charts" element={<Charts />} />
    </Routes>
  );
}

export default App;
