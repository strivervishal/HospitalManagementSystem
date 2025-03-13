import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUserPlus, faProcedures, faDollarSign, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import appointment from '../../../backend/models/appointment';
import Patient from '../../../backend/models/Patient';


const iconMap = {
  faCalendarCheck,
  faUserPlus,
  faProcedures,
  faDollarSign,
};

const DashboardCards = () => {

  const [data, setCards] = useState({
    appointment: 0,
    Patient: 0,
    operations: 0,
    earnings: "$ 0",
  });


  useEffect(()=>{
    fetch("http://localhost:5000/api/dashboardcards")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  const cards = [
    { icon: faCalendarCheck, title: "Appointments", value: data.appointment, percentage: 30, color: "teal" },
    { icon: faUserPlus, title: "New Patients", value: data.patient, percentage: 50, color: "orange" },
    { icon: faProcedures, title: "Operations", value: data.operations, percentage: 40, color: "blue" },
    { icon: faDollarSign, title: "HPL Earning", value: data.earnings, percentage: 20, color: "purple" },
  ];

  return (
    <div className="bg-blue-5 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 w-68 mt-4 ml-6">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={card.icon} className={`text-${card.color}-500 text-xl`} />
              <h2 className="ml-2 text-lg font-semibold">{card.title}</h2>
            </div>
            <div className="text-2xl font-bold mb-2">{card.value}</div>
            <div className={`relative h-2 bg-${card.color}-100 rounded-full mb-2`}>
              <div
                className={`absolute top-0 left-0 h-2 bg-${card.color}-500 rounded-full`}
                style={{ width: `${card.percentage}%` }}
              ></div>
            </div>
            <div className={`text-${card.color}-500 text-sm`}>
              <FontAwesomeIcon icon={faArrowUp} /> {card.percentage}% Vs Last Month
            </div>
          </div>
        ))}
        {/* Common card style applied */}
        {/* {[
          { icon: faCalendarCheck, title: 'Appointments', value: 950, percentage: 30, color: 'teal' },
          { icon: faUserPlus, title: 'New Patients', value: 1500, percentage: 50, color: 'orange' },
          { icon: faProcedures, title: 'Operations', value: 400, percentage: 40, color: 'blue' },
          { icon: faDollarSign, title: 'HPL Earning', value: '$15.500', percentage: 20, color: 'purple' },
        ].map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 w-68 mt-4 ml-6">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={card.icon} className={`text-${card.color}-500 text-xl`} />
              <h2 className="ml-2 text-lg font-semibold">{card.title}</h2>
            </div>
            <div className="text-2xl font-bold mb-2">{card.value}</div>
            <div className={`relative h-2 bg-${card.color}-100 rounded-full mb-2`}>
              <div
                className={`absolute top-0 left-0 h-2 bg-${card.color}-500 rounded-full`}
                style={{ width: `${card.percentage}%` }}
              ></div>
            </div>
            <div className={`text-${card.color}-500 text-sm`}>
              <FontAwesomeIcon icon={faArrowUp} /> {card.percentage}% Vs Last Month
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DashboardCards;
