import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUserPlus, faProcedures, faDollarSign, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const DashboardCards = () => {
  return (
    <div className="bg-blue-5 flex justify-center items-center ">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {/* Appointments Card */}
        
        <div className="bg-white rounded-lg w-60 shadow p-7">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-teal-500 text-xl" />
            <h2 className="ml-2 text-lg font-semibold">Appointments</h2>
          </div>
          <div className="text-2xl font-bold mb-2">950</div>
          <div className="relative h-2 bg-teal-100 rounded-full mb-2">
            <div className="absolute top-0 left-0 h-2 bg-teal-500 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <div className="text-teal-500 text-sm">
            <FontAwesomeIcon icon={faArrowUp} /> 30% Vs Last Month
          </div>
        </div>
        {/* New Patients Card */}
        <div className="bg-white rounded-lg shadow p-7">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faUserPlus} className="text-orange-500 text-xl" />
            <h2 className="ml-2 text-lg font-semibold">New Patients</h2>
          </div>
          <div className="text-2xl font-bold mb-2">1500</div>
          <div className="relative h-2 bg-orange-100 rounded-full mb-2">
            <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <div className="text-orange-500 text-sm">
            <FontAwesomeIcon icon={faArrowUp} /> 50% Vs Last Month
          </div>
        </div>
        {/* Operations Card */}
        <div className="bg-white rounded-lg shadow p-7">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faProcedures} className="text-blue-500 text-xl" />
            <h2 className="ml-2 text-lg font-semibold">Operations</h2>
          </div>
          <div className="text-2xl font-bold mb-2">400</div>
          <div className="relative h-2 bg-blue-100 rounded-full mb-2">
            <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <div className="text-blue-500 text-sm">
            <FontAwesomeIcon icon={faArrowUp} /> 40% Vs Last Month
          </div>
        </div>
        {/* HPL Earning Card */}
        <div className="bg-white rounded-lg shadow p-7">
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faDollarSign} className="text-purple-500 text-xl" />
            <h2 className="ml-2 text-lg font-semibold">HPL Earning</h2>
          </div>
          <div className="text-2xl font-bold mb-2">$15.500</div>
          <div className="relative h-2 bg-purple-100 rounded-full mb-2">
            <div className="absolute top-0 left-0 h-2 bg-purple-500 rounded-full" style={{ width: '20%' }}></div>
          </div>
          <div className="text-purple-500 text-sm">
            <FontAwesomeIcon icon={faArrowUp} /> 20% Vs Last Month
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;