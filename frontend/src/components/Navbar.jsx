// import { Link } from "react-router-dom";
// import { FaUser, FaBell, FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="text-2xl font-bold text-teal-600">
//         <Link to="/">You Medi</Link>
//       </div>

//       {/* Navigation Links */}
//       <div className="space-x-6 hidden md:flex">
//         <Link to="/" className="hover:text-teal-500">Dashboard</Link>
//         <Link to="/doctors" className="hover:text-teal-500">Doctors</Link>
//         <Link to="/appointments" className="hover:text-teal-500">Appointments</Link>
//         <Link to="/patients" className="hover:text-teal-500">Patients</Link>
//         <Link to="/pharmacy" className="hover:text-teal-500">Pharmacy</Link>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-4">
//         <FaBell className="text-gray-500 cursor-pointer hover:text-teal-500" />
//         <FaShoppingCart className="text-gray-500 cursor-pointer hover:text-teal-500" />
//         <FaUser className="text-gray-500 cursor-pointer hover:text-teal-500" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaShoppingCart, FaUser } from "react-icons/fa";
import medicleIcon from "../assets/medical.png";
import adminImg from "../assets/admin.png"; // Adjust path if needed


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl text-teal-600 flex items-center">
        You <span className="text-gray-900 ml-2">Medi</span>
          <img 
  src={medicleIcon} 
  alt="Medical Icon" 
  className="h-10 w-10 ml-2" 
/>

        </h1>
      </div>

      {/* Center - Search Bar */}
      <div className="relative w-1/3 ml-90">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-full py-2 px-4 pl-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Right Side - Icons & User Profile
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
        <FaShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
        <Link to="/profile" className="flex items-center gap-2">
          <FaUser className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
          <span className="text-gray-700 font-medium">Zain Ahmed</span>
        </Link>
      </div> */}
      {/* Right Side - Icons & User Profile */}
<div className="flex items-center gap-14"> {/* Adjusted spacing */}
  <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
  <FaShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
  <Link to="/profile" className="flex items-center gap-2">
    {/* Admin Image (Icon Removed) */}
    <img
      src={adminImg} // Ensure you import this image at the top
      alt="Admin"
      className="h-17 w-17 rounded-full"
    />
    <span className="text-gray-700 font-medium">Zain Ahmed</span>
  </Link>
</div>


    </nav>
  );
};

export default Navbar;
