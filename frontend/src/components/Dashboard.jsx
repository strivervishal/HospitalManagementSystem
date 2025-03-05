import React from 'react'
import DashboardCards from './DashboardCards'
import Sidebar from './Sidebar'
import BookedAppointments from './BookedAppointments'

const Dashboard = () => {
  return (
    <div>Dashboard
      <Sidebar />
      <DashboardCards />
      <BookedAppointments />
    </div>
  )
}

export default Dashboard