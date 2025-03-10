import React, { useState, useEffect } from "react";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

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

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-305 -mt-150 ml-6">
        <h2 className="text-2xl font-bold text-center mb-4">Scheduled Appointments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#e8f8f8] text-left">
              {["Patient Name", "Assigned Doctor", "Date", "Time"].map((header, index) => (
                <th key={index} className="p-3 text-gray-600 border-b border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id} className="border-b border-gray-300 hover:bg-gray-100 transition">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.assignedDoctor}</td>
                  <td className="p-3">{appointment.date}</td>
                  <td className="p-3">{appointment.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No Appointments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
