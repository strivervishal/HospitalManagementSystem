import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>} />
        <Route path="/doctors" element={<h1>Doctors</h1>} />
        <Route path="/appointments" element={<h1>Appointments</h1>} />
        <Route path="/patients" element={<h1>Patients</h1>} />
        <Route path="/pharmacy" element={<h1>Pharmacy</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
