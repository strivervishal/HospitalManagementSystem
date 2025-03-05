import { FaSearch, FaBell, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl text-teal-600 flex items-center">
          You <span className="text-gray-900 ml-2">Medi</span>
          <img
            src="https://i.imgur.com/dVs8bZy.png"
            alt="Medical Icon"
            className="h-10 w-10 ml-2"
          />
        </h1>
      </div>

      {/* Center - Search Bar */}
      <div className="relative w-1/3 ml-20">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-full py-2 px-4 pl-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Right Side - Icons & User Profile */}
      <div className="flex items-center gap-8">
        {" "}
        {/* Adjusted gap for better spacing */}
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
        <FaShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-teal-500" />
        {/* Button instead of Link */}
        <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700">
          <img
            src="https://i.imgur.com/w0Q4XdT.png"
            alt="Admin"
            className="h-12 w-12 rounded-full"
          />
          <span className="text-white font-medium">Zain Ahmed</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
