import { FaUserPlus, FaProcedures, FaDollarSign, FaCalendarCheck, FaTrash, FaEdit } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#e8f8f8] min-h-screen">
      <h1 className="text-2xl font-bold"></h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 mt-20">

        {[ 
          { icon: <FaCalendarCheck className="text-teal-500 text-3xl" />, title: "Appointments", count: 120, percent: 60, color: "teal" },
          { icon: <FaUserPlus className="text-orange-500 text-3xl" />, title: "New Patients", count: 1500, percent: 50, color: "orange" },
          { icon: <FaProcedures className="text-blue-500 text-3xl" />, title: "Operations", count: 400, percent: 40, color: "blue" },
          { icon: <FaDollarSign className="text-purple-500 text-3xl" />, title: "HPL Earning", count: "$15,500", percent: 20, color: "purple" }
        ].map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-3">
              {card.icon}
              <p className="font-bold">{card.title}</p>
            </div>
            <p className="text-2xl font-bold mt-2">{card.count}</p>
            <div className="w-full h-2 mt-2 rounded-full bg-gray-200">
              <div className={`h-2 rounded-full bg-${card.color}-500`} style={{ width: `${card.percent}%` }}></div>
            </div>
            <p className={`text-${card.color}-500 text-sm mt-1`}>↑ {card.percent}% Vs Last Month</p>
          </div>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-white mt-6 p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className="text-xl font-bold">Scheduled Appointment</h2>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
            Add New +
          </button>
        </div>

        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-[#e8f8f8] text-left">
              {["Patient Name", "Assigned Doctor", "Date", "Time", "Action"].map((header, index) => (
                <th key={index} className="p-3 text-gray-600 border-b border-gray-300">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[ 
              { name: "Shiva Kumar", doctor: "Dr. Sai Ahmed", date: "08/03/2025", time: "08:30" },
              { name: "Shashank", doctor: "Dr. Dinesh Kumar", date: "13/03/2025", time: "09:30" },
              { name: "Dakshitha Kumari", doctor: "Dr. Zain Ahmed", date: "14/03/2025", time: "10:30" },
              { name: "Laila Mahmoud", doctor: "Dr. Vishal Pandey", date: "14/03/2025", time: "08:30" }
            ].map((appointment, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition">
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
  );
};

export default Dashboard;
