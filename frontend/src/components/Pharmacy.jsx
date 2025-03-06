import React, { useState } from "react";

const PharmacyDashboard = () => {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.price) {
      setMedicines([...medicines, form]);
      setForm({ name: "", description: "", price: "" });
    }
  };

    return (
    <div style={{ height: "100vh", background: "#E0FFFF", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "60%", marginBottom: "10px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: 30 }}>Pharmacy</h2>
        <button style={{ padding: "10px", background: "#17C3B2", color: "white", border: "none", cursor: "pointer" ,borderRadius: "10px"}}>Export</button>
      </div>
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "60%", position: "relative", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <h3 style={{ marginRight: "auto", fontWeight: "bold", fontSize: "1.5em" }}>Add Medicine</h3>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <label style={{  marginBottom: "5px" }}>Medicine Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Medicine Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "25px" }}
            />
          </div>
          <div style={{ flex: "2", display: "flex", flexDirection: "column" }}>
            <label style={{  marginTop: "40px" }}>Medicine Description*</label>
            <textarea
              name="description"
              placeholder="Enter Medicine Description"
              value={form.description}
              onChange={handleChange}
              required
              style={{ padding: "10px", height: "90px", resize: "none", border: "1px solid #ccc", borderRadius: "25px" }}
            />
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "5px" }}>Price*</label>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={form.price}
              onChange={handleChange}
              required
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "25px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px", background: "#17C3B2", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>Add</button>
        </form>
      </div>

      {/* Graph & Two Cards Section */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", width: "60%" }}>
        {/* Graph Placeholder */}
        <div style={{ flex: 1, background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
          <h4 style={{ fontSize: "1.2em", fontWeight: "bold" }}>Pharmacy Status</h4>
          <img src="https://i.imgur.com/W40OoXz.png" alt="Graph Placeholder" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
        </div>

        {/* Two Stacked Cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Annual & Daily Earning Card */}
          <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: "1.2em", fontWeight: "bold", color: "#FFA500" }}>Annual Earning</h4>
              <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>$150,500</p>
              <div style={{ width: "100%", height: "6px", background: "#FFD580", borderRadius: "3px" }}>
                <div style={{ width: "90%", height: "100%", background: "#FFA500", borderRadius: "3px" }}></div>
              </div>
              <p style={{ marginTop: "5px", fontSize: "0.9em", color: "#FFA500" }}>🔼 90% Vs Last Year</p>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: "1.2em", fontWeight: "bold", color: "#A020F0" }}>Daily Earning</h4>
              <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>$15,500</p>
              <div style={{ width: "100%", height: "6px", background: "#D8BFD8", borderRadius: "3px" }}>
                <div style={{ width: "20%", height: "100%", background: "#A020F0", borderRadius: "3px" }}></div>
              </div>
              <p style={{ marginTop: "5px", fontSize: "0.9em", color: "#A020F0" }}>🔼 20% Vs Last Day</p>
            </div>
          </div>

          {/* Top Pharmacist Card */}
          <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.2em", fontWeight: "bold" }}>Our Top Pharmacist</h4>
            <img src="https://i.imgur.com/GubAU1O.png" alt="Pharmacist" style={{ width: "400px", height: "100px", borderRadius: "50%", margin: "10px auto" }} />
            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Congratulations Aliaa, Mai, Donia</p>
            <p style={{ fontSize: "0.9em", color: "#777" }}>
              Lorem ipsum dolor sit amet consectetur. Pharetra neque duis nulla diam consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;



