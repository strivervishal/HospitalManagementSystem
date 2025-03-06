import React from 'react'
import DashboardCards from './DashboardCards'
import Sidebar from './Sidebar'
import BookedAppointments from './BookedAppointments'
import Navbar from './Navbar'
import PharmacyDashboard from "./Pharmacy";

const Dashboard = () => {
  return (
    <div className="h-263 space-y-10 bg-[#E6F7F7]">
      <Navbar />
      <Sidebar />
      <PharmacyDashboard />
      <h1 className="text-2xl font-bold text-center mr-220">Dashboard</h1>

      <DashboardCards />
      <BookedAppointments />
    </div>
  )
}

export default Dashboard