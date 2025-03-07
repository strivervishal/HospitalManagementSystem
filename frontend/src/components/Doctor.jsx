import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Doctor = () => {
  return <div className="h-screen flex flex-col">
    <Navbar />
    <Sidebar />
  </div>;
}

export default Doctor