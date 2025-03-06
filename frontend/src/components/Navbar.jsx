import { FaBell, FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      <div className="relative w-1/3">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-full bg-gray-100"
          placeholder="Search"
        />
        <FaSearch className="absolute top-3 right-3 text-gray-500" />
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-gray-600 cursor-pointer" />
        <FaShoppingCart className="text-gray-600 cursor-pointer" />
        <div className="bg-teal-500 text-white px-4 py-2 rounded-full flex items-center cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Zain Ahmed</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
