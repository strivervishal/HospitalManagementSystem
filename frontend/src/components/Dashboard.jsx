import React from 'react'
import DashboardCards from './DashboardCards'
import Sidebar from './Sidebar'
import BookedAppointments from './BookedAppointments'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div>Dashboard
      <Navbar />
      <Sidebar />
      <DashboardCards />
      <BookedAppointments />
    </div>
  )
}

export default Dashboard