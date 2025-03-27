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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      background: "#17C3B2"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "480px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#003366" }}>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            onChange={handleChange}
          />
          <select
            name="role"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            onChange={handleChange}
          >
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#17C3B2", 
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "16px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#003366", fontWeight: "bold", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
