import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const initialAppointments = [
  { id: 1, name: "Shiva Kumar", doctor: "Dr. Sai Ahmed", date: "08/03/2025", time: "08:30" },
  { id: 2, name: "Shashank", doctor: "Dr. Dinesh Kumar", date: "13/03/2025", time: "09:30" },
  { id: 3, name: "Dakshitha Kumari", doctor: "Dr. Zain Ahmed", date: "14/03/2025", time: "10:30" },
  { id: 4, name: "Laila Mahmoud", doctor: "Dr. Vishal Pandey ", date: "14/03/2025", time: "08:30" },
];

export default function BookedAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 bg-blue-50 rounded-xl shadow-lg w-full max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold">Booked Appointment</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 sm:mt-0">
          Add New +
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-100 text-sm sm:text-base">
              <th className="p-3 text-left">Select</th>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Assigned Doctor</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b text-sm sm:text-base">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3">{appointment.name}</td>
                <td className="p-3">{appointment.doctor}</td>
                <td className="p-3">{appointment.date}</td>
                <td className="p-3">{appointment.time}</td>
                <td className="p-3 flex gap-3">
                  <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-600" />
                  <FaTrash className="text-red-500 cursor-pointer hover:text-red-600" onClick={() => handleDelete(appointment.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
