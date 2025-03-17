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
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      borderRadius: "10px",
      background: "#17C3B2"
    }}>
      <div style={{
       display: "flex",
       width: "60%",
       height: "450px",
       background: "#fff",
       borderRadius: "15px",
       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
       overflow: "hidden",
       border: "3px solid #17C3B2"
      }}>
        {/* Left Side - Form */}
        <div style={{ flex: 1, padding: "40px" }}>
          {user ? (
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
              Welcome, {user.username}!
            </h2>
          ) : (
            <>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Login</h2>
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
                    marginBottom: "10px"
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
                    marginBottom: "10px"
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
                    marginBottom: "10px"
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
                    fontSize: "16px"
                  }}
                >
                  Login
                </button>
              </form>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <span>Don't have an account? </span>
                <Link to="/signup" style={{ color: "#003366", textDecoration: "underline" }}>Sign up</Link>
              </div>
            </>
          )}
        </div>

        {/* Right Side - Image */}
        <div style={{
          flex: 1,
          background: `url(https://i.imgur.com/ROpADNF.png) center/cover no-repeat` // Replace with valid Imgur image
        }}>
        </div>
      </div>
    </div>
  );
};

export default Login;

