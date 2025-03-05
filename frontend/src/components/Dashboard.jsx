import React from 'react'
import DashboardCards from './DashboardCards'
import Sidebar from './Sidebar'
import Navbar from "./Navbar"; 


const Dashboard = () => {
  return (
    <div>Dashboard
      <Sidebar />
      <Navbar />
      <DashboardCards />
    </div>
  )
}

export default Dashboard