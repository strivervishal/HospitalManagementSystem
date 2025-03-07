import { FaHome, FaUserMd, FaCalendarCheck, FaUsers, FaPills, FaChartBar, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-[calc(100vh-64px)] mt-16 flex flex-col fixed">
      <ul className="flex-1">
        <li className="flex items-center px-6 py-3 bg-teal-500 text-white">
          <FaHome className="mr-3" />
          Dashboard
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaUserMd className="mr-3" />
          Doctors
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaCalendarCheck className="mr-3" />
          Appointments
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaUsers className="mr-3" />
          Patients
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaPills className="mr-3" />
          Pharmacy
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaChartBar className="mr-3" />
          Charts
        </li>
      </ul>
      <div className="border-t">
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaCog className="mr-3" />
          Settings
        </li>
        <li className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaQuestionCircle className="mr-3" />
          Help Center
        </li>
        <li className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
          <FaSignOutAlt className="mr-3" />
          Log Out
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
