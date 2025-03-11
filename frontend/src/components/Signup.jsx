import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "doctor",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signup", formData);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
          />
          <select name="role" className="w-full p-2 border rounded mb-2" onChange={handleChange}>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
          <button className="w-full bg-teal-500 text-white p-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-teal-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
