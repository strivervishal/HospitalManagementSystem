import React from 'react'
import DashboardCards from './DashboardCards'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div>Dashboard
      <Sidebar />
      <DashboardCards />
    </div>
  )
}

export default Dashboard