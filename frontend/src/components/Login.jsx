import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "", role: "doctor" });
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track if screen is mobile
  const navigate = useNavigate();

  // Handle screen resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#17C3B2",
        padding: isMobile ? "20px" : "0", // Add padding on smaller screens
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          width: isMobile ? "90%" : "400px", // Fixed width for desktop, responsive for mobile
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          border: "3px solid #17C3B2",
          padding: "40px", // Add padding for content
        }}
      >
        {user ? (
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Welcome, {user.username}!
          </h2>
        ) : (
          <>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center", // Center the heading
              }}
            >
              Login
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
                  fontSize: isMobile ? "14px" : "16px", // Adjust font size for smaller screens
                }}
                onChange={handleChange}
                required
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
                  fontSize: isMobile ? "14px" : "16px",
                }}
                onChange={handleChange}
                required
              />
              <select
                name="role"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  fontSize: isMobile ? "14px" : "16px",
                }}
                onChange={handleChange}
              >
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="admin">Admin</option>
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
                Login
              </button>
            </form>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <span>Don't have an account? </span>
              <Link
                to="/signup"
                style={{ color: "#003366", textDecoration: "underline" }}
              >
                Sign up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

