import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  FaUserPlus,
  FaProcedures,
  FaDollarSign,
  FaCalendarCheck,
  FaTrash,
  FaEdit,
} from "react-icons/fa";


const Appointment = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Sidebar />
       {/* Main content area for different pages */}
       <div className="flex-1 p-4 bg-gray-100 ml-64">
            <h1 className="text-2xl font-bold"></h1>

            

            {/* Appointments Table */}
            <div className="bg-white mt-20 p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <h2 className="text-xl font-bold">Scheduled Appointment</h2>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
                  Add New +
                </button>
              </div>

              <table className="w-full mt-4 border-collapse">
                <thead>
                  <tr className="bg-[#e8f8f8] text-left">
                    {[
                      "Patient Name",
                      "Assigned Doctor",
                      "Date",
                      "Time",
                      "Action",
                    ].map((header, index) => (
                      <th
                        key={index}
                        className="p-3 text-gray-600 border-b border-gray-300"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Shiva Kumar",
                      doctor: "Dr. Sai Ahmed",
                      date: "08/03/2025",
                      time: "08:30",
                    },
                    {
                      name: "Shashank",
                      doctor: "Dr. Dinesh Kumar",
                      date: "13/03/2025",
                      time: "09:30",
                    },
                    {
                      name: "Dakshitha Kumari",
                      doctor: "Dr. Zain Ahmed",
                      date: "14/03/2025",
                      time: "10:30",
                    },
                    {
                      name: "Laila Mahmoud",
                      doctor: "Dr. Vishal Pandey",
                      date: "14/03/2025",
                      time: "08:30",
                    },
                    {
                      name: "Shashank",
                      doctor: "Dr. Dinesh Kumar",
                      date: "13/03/2025",
                      time: "09:30",
                    },
                    {
                      name: "Dakshitha Kumari",
                      doctor: "Dr. Zain Ahmed",
                      date: "14/03/2025",
                      time: "10:30",
                    },
                    {
                      name: "Laila Mahmoud",
                      doctor: "Dr. Vishal Pandey",
                      date: "16/03/2025",
                      time: "02:30",
                    },
                    {
                      name: "Shashank",
                      doctor: "Dr. Dinesh Kumar",
                      date: "16/03/2025",
                      time: "09:30",
                    },
                    {
                      name: "Dakshitha Kumari",
                      doctor: "Dr. Zain Ahmed",
                      date: "19/03/2025",
                      time: "12:30",
                    },
                    {
                      name: "Laila Mahmoud",
                      doctor: "Dr. Vishal Pandey",
                      date: "19/03/2025",
                      time: "03:30",
                    },
                  ].map((appointment, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 hover:bg-gray-100 transition"
                    >
                      <td className="p-3">{appointment.name}</td>
                      <td className="p-3">{appointment.doctor}</td>
                      <td className="p-3">{appointment.date}</td>
                      <td className="p-3">{appointment.time}</td>
                      <td className="p-3 flex space-x-3">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEdit className="text-2xl" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
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
