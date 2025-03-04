import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-grow p-5 ml-64">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
