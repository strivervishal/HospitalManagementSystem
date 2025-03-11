import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "", role: "doctor" });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/auth/login", formData);

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user)); 
        setUser(data.user);
        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {user ? (
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border rounded mb-2"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded mb-2"
                onChange={handleChange}
                required
              />
              <select name="role" className="w-full p-2 border rounded mb-2" onChange={handleChange}>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded">Login</button>
            </form>
            <div className="mt-2 text-center">
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-teal-500 hover:underline">Sign up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
