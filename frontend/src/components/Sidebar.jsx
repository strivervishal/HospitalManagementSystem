import { FaHome, FaUserMd, FaCalendarCheck, FaUsers, FaPills, FaChartBar, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-[calc(100vh-64px)] mt-16 flex flex-col fixed">
      <ul className="flex-1">
        <Link to="/" className="flex items-center px-6 py-3 bg-teal-500 text-white">
          <FaHome className="mr-3" />
          Dashboard
        </Link>
        <Link to="/doctor" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaUserMd className="mr-3" />
          Doctors
        </Link>
        <Link to="/appointment" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaCalendarCheck className="mr-3" />
          Appointments
        </Link>
        <Link to="/patient" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaUsers className="mr-3" />
          Patients
        </Link>
        <Link to="/pharmacy" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaPills className="mr-3" />
          Pharmacy
        </Link>
        <Link to="/chart" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaChartBar className="mr-3" />
          Charts
        </Link>
      </ul>
      <div className="border-t">
        <Link to="/setting" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaCog className="mr-3" />
          Settings
        </Link>
        <Link to="/help" className="flex items-center px-6 py-3 hover:bg-gray-100">
          <FaQuestionCircle className="mr-3" />
          Help Center
        </Link>
        <Link to="/logOut" className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
          <FaSignOutAlt className="mr-3" />
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
