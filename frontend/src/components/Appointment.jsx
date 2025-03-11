import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [formData, setFormData] = useState({
    patientName: "",
    assignedDoctor: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5000/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleAddAppointment = async () => {
    if (!formData.patientName || !formData.assignedDoctor || !formData.date || !formData.time) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save appointment");

      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);
      setShowForm(false);
      setFormData({ patientName: "", assignedDoctor: "", date: "", time: "" });
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/appointments/${id}`, { method: "DELETE" });
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleEdit = (appointment) => {
    setEditMode(appointment._id);
    setFormData({
      patientName: appointment.patientName,
      assignedDoctor: appointment.assignedDoctor,
      date: appointment.date,
      time: appointment.time,
    });
    setShowForm(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/appointments/${editMode}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update appointment");

      const updatedAppointment = await response.json();
      setAppointments(appointments.map((appointment) =>
        appointment._id === editMode ? updatedAppointment : appointment
      ));

      setEditMode(null);
      setShowForm(false);
      setFormData({ patientName: "", assignedDoctor: "", date: "", time: "" });
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Sidebar />
       {/* Main content area for different pages */}
       <div className="flex-1 p-4 bg-gray-100 ml-64">
      <div className="bg-white mt-20 p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className="text-xl font-bold">Scheduled Appointment</h2>
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            onClick={() => { setShowForm(true); setEditMode(null); }}
          >
            Add New +
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
            <input
              type="text"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              className="border p-2 w-full rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Assigned Doctor"
              value={formData.assignedDoctor}
              onChange={(e) => setFormData({ ...formData, assignedDoctor: e.target.value })}
              className="border p-2 w-full rounded-md mb-2"
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="border p-2 w-full rounded-md mb-2"
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="border p-2 w-full rounded-md mb-2"
            />
            <button
              onClick={editMode ? handleUpdate : handleAddAppointment}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full"
            >
              {editMode ? "Save Changes" : "Save Appointment"}
            </button>
          </div>
        )}

        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-[#e8f8f8] text-left">
              {["Patient Name", "Assigned Doctor", "Date", "Time", "Action"].map((header, index) => (
                <th key={index} className="p-3 text-gray-600 border-b border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="border-b border-gray-300 hover:bg-gray-100 transition">
                <td className="p-3">{appointment.patientName}</td>
                <td className="p-3">{appointment.assignedDoctor}</td>
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>
                <td className="p-3 flex space-x-3">
                  <button onClick={() => handleEdit(appointment)} className="text-blue-500 hover:text-blue-700">
                    <FaEdit className="text-2xl" />
                  </button>
                  <button onClick={() => handleDelete(appointment._id)} className="text-red-500 hover:text-red-700">
                    <FaTrash className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>   
    </div>
   );
 }

export default Appointment;

// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// const Dashboard = () => {
//   return (
//     <>
//       <div className="h-screen flex flex-col">
//         {/* Navbar at the top */}
//         <Navbar />

//         {/* Sidebar + Content */}
//         <div className="flex flex-1">
//           {/* Sidebar remains fixed */}
//           <Sidebar />

          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
