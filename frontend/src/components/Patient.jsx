import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Patient = () => {


  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState(
    Array(30).fill(null).map((_, index) => ({
      id: index + 1,
      name: "Patient " + (index + 1),
      age: 20 + (index % 5),
      gender: index % 2 === 0 ? "Male" : "Female",
      appointment: "2024-08-13 08:30",
      doctorAssigned: "Dr. Smith"
    }))
  );
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    appointment: "",
    doctorAssigned: ""
  });

  const itemsPerPage = 9;
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPatients = filteredPatients.reverse().slice(startIndex, startIndex + itemsPerPage);


  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddNew = () => {
    setShowForm(true);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
    setShowForm(false);
    setNewPatient({ name: "", age: "", gender: "Male", appointment: "", doctorAssigned: "" });
  };


  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Sidebar />


      {/* Main Content */}
      <div className="flex-1 mt-15 p-4 bg-gray-100 ml-64">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Patient List</h2>
            {/* <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md">Export ⬆</button> */}
          </div>

          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg p-2 w-1/3 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md" onClick={handleAddNew}>
              Add New +
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="w-full mb-4 p-6">
              <div className="flex flex-wrap space-x-4">
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="flex-1 border p-3 rounded-lg shadow-sm"
                  value={newPatient.name}
                  onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="flex-1 border p-3 rounded-lg shadow-sm"
                  value={newPatient.age}
                  onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                  required
                />
                <select
                  className="flex-1 border p-3 rounded-lg shadow-sm"
                  value={newPatient.gender}
                  onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="datetime-local"
                  className="flex-1 border p-3 rounded-lg shadow-sm"
                  value={newPatient.appointment}
                  onChange={(e) => setNewPatient({ ...newPatient, appointment: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Doctor Assigned"
                  className="flex-1 border p-3 rounded-lg shadow-sm"
                  value={newPatient.doctorAssigned}
                  onChange={(e) => setNewPatient({ ...newPatient, doctorAssigned: e.target.value })}
                  required
                />
                <button type="submit" className="bg-green-500 text-white p-3 rounded-lg shadow-md">Save</button>
                <button onClick={() => setShowForm(false)} className="bg-red-300 hover:bg-red-500 text-white p-3 rounded-lg shadow-md">Cancel</button>
              </div>
            </form>
          )}

          {/* Table */}
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Patient Name ⬇</th>
                <th className="p-4 text-left">Age ⬇</th>
                <th className="p-4 text-left">Gender ⬇</th>
                <th className="p-4 text-left">Appointment ⬇</th>
                <th className="p-4 text-left">Doctor Assigned ⬇</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPatients.length > 0 ? (
                paginatedPatients.map((patient, index) => (
                  <tr
                    key={patient.id}
                    className={`border-t ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-teal-100 transition`}
                  >
                    <td className="p-4">{patient.id}</td>
                    <td className="p-4 font-medium">{patient.name}</td>
                    <td className="p-4">{patient.age}</td>
                    <td className="p-4">{patient.gender}</td>
                    <td className="p-4">{patient.appointment.replace("T", " ")}</td>
                    <td className="p-4">{patient.doctorAssigned}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="px-3 py-1 border rounded-lg disabled:opacity-50"
            >
              &lt;
            </button>

            {currentPage > 2 && <span className="px-3 py-1">...</span>}

            {[...Array(totalPages).keys()]
              .map((_, i) => i + 1)
              .filter((page) => page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1))
              .map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-1 border rounded-lg ${
                    currentPage === page ? "bg-teal-500 text-white" : ""
                  }`}
                >
                  {page}
                </button>
              ))}

            {currentPage < totalPages - 1 && <span className="px-3 py-1">...</span>}

            <button
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="px-3 py-1 border rounded-lg disabled:opacity-50"
            >
              &gt;
            </button>
          </div>


        </div>
      </div>



    </div>
  );
};

export default Patient;
