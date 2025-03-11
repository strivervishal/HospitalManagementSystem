"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import axios from "axios"
import {
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiFilter,
  FiDownload,
  FiPlus,
  FiChevronDown,
  FiCalendar,
  FiX,
} from "react-icons/fi"

const Doctor = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedDate, setSelectedDate] = useState("Today")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingDoctor, setEditingDoctor] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)

  useEffect(() => {
    fetchDoctors()
  }, [currentPage, searchQuery, selectedDate])

  const fetchDoctors = async () => {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:5000/api/doctors", {
        params: {
          page: currentPage,
          search: searchQuery,
          date: selectedDate.toLowerCase(),
          limit: 10,
        },
      })

      setDoctors(response.data.doctors || [])
      setTotalPages(response.data.totalPages || 1)
      setLoading(false)
    } catch (err) {
      setError("Failed to fetch doctors data")
      setLoading(false)
      console.error("Error fetching doctors:", err)
    }
  }

  // Fixed search handler to properly update the searchQuery state
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  // Fixed add doctor handler to properly submit the form data
  const handleAddDoctor = async (doctorData) => {
    try {
      await axios.post("http://localhost:5000/api/doctors", doctorData)
      fetchDoctors()
      setIsModalOpen(false)
    } catch (err) {
      console.error("Error adding doctor:", err)
      alert("Failed to add doctor. Please try again.")
    }
  }

  // Fixed edit doctor handler to properly update the doctor data
  const handleEditDoctor = async (doctorData) => {
    try {
      await axios.put(`http://localhost:5000/api/doctors/${editingDoctor._id}`, doctorData)
      fetchDoctors()
      setIsModalOpen(false)
      setEditingDoctor(null)
    } catch (err) {
      console.error("Error updating doctor:", err)
      alert("Failed to update doctor. Please try again.")
    }
  }

  // Fixed delete doctor handler to properly delete the doctor
  const handleDeleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/doctors/${id}`)
      fetchDoctors()
      setShowDeleteConfirm(null)
    } catch (err) {
      console.error("Error deleting doctor:", err)
      alert("Failed to delete doctor. Please try again.")
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleExport = () => {
    // Implement export functionality
    console.log("Export doctors list")
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-70 mt-18 mr-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Doctors List</h1>
            <button
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
              onClick={handleExport}
            >
              <FiDownload size={16} />
              <span>Export</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">Doctors List</h2>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <DateFilter selectedDate={selectedDate} onDateChange={setSelectedDate} />

                <button
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setEditingDoctor(null)
                    setIsModalOpen(true)
                  }}
                >
                  <FiPlus size={16} />
                  <span>Add New</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-6 text-center">Loading...</div>
              ) : error ? (
                <div className="p-6 text-center text-red-500">{error}</div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                          Doctor Name
                          <FiFilter size={14} className="text-gray-400" />
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                          Department
                          <FiFilter size={14} className="text-gray-400" />
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                          Date
                          <FiFilter size={14} className="text-gray-400" />
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                          Time
                          <FiFilter size={14} className="text-gray-400" />
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {doctors.map((doctor) => (
                      <tr key={doctor._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">{doctor.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{doctor.department}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{doctor.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{doctor.time}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex gap-3">
                            <button
                              className="text-gray-500 hover:text-blue-500"
                              onClick={() => {
                                setEditingDoctor(doctor)
                                setIsModalOpen(true)
                              }}
                            >
                              <FiEdit2 size={18} />
                            </button>
                            <button
                              className="text-gray-500 hover:text-red-500"
                              onClick={() => setShowDeleteConfirm(doctor._id)}
                            >
                              <FiTrash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                Showing {doctors.length > 0 ? 1 : 0} of {totalPages * 10}
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  &lt;
                </button>

                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 flex items-center justify-center rounded ${
                      currentPage === page ? "bg-teal-500 text-white" : "border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}

                {totalPages > 3 && <span className="px-1">...</span>}

                <button
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 disabled:opacity-50"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Add/Edit Doctor Modal */}
          {isModalOpen && (
            <AddDoctorModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false)
                setEditingDoctor(null)
              }}
              onSubmit={editingDoctor ? handleEditDoctor : handleAddDoctor}
              initialData={editingDoctor}
            />
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this doctor? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowDeleteConfirm(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteDoctor(showDeleteConfirm)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// AddDoctorModal Component
const AddDoctorModal = ({ isOpen, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      department: "",
      specialization: "",
      qualification: "",
      experience: "",
      email: "",
      phone: "",
      address: "",
      availability: {
        days: [],
        time: "",
      },
      status: "active",
      profileImage: "",
    },
  )

  // Initialize form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const [errors, setErrors] = useState({})

  const availableDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDayChange = (day) => {
    const days = formData.availability.days.includes(day)
      ? formData.availability.days.filter((d) => d !== day)
      : [...formData.availability.days, day]

    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        days,
      },
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.department) newErrors.department = "Department is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone is required"
    if (formData.availability.days.length === 0) newErrors.days = "Select at least one day"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    await onSubmit(formData)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">{initialData ? "Edit Doctor" : "Add New Doctor"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-teal-500 focus:ring-teal-500`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.department ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-teal-500 focus:ring-teal-500`}
                >
                  <option value="">Select Department</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
                {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-teal-500 focus:ring-teal-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-teal-500 focus:ring-teal-500`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Available Days</label>
            <div className="flex flex-wrap gap-2">
              {availableDays.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayChange(day)}
                  className={`px-4 py-2 rounded-md text-sm ${
                    formData.availability.days.includes(day)
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            {errors.days && <p className="text-red-500 text-xs">{errors.days}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Available Time</label>
            <input
              type="text"
              name="time"
              value={formData.availability.time}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  availability: {
                    ...prev.availability,
                    time: e.target.value,
                  },
                }))
              }
              placeholder="e.g., 8:30 AM - 5:00 PM"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
              {initialData ? "Update Doctor" : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// DateFilter Component
const DateFilter = ({ selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const dates = [
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "last7days" },
    { label: "Last 30 days", value: "last30days" },
    { label: "Custom", value: "custom" },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
      >
        <FiCalendar className="text-gray-500" />
        <span>{selectedDate}</span>
        <FiChevronDown className="text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <div className="py-1">
            {dates.map((date) => (
              <button
                key={date.value}
                onClick={() => {
                  onDateChange(date.label)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedDate === date.label ? "bg-teal-50 text-teal-500" : "text-gray-700"
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Doctor

