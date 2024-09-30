// import { ImBooks } from "react-icons/im"; 
// import { AiOutlineLineChart } from "react-icons/ai"; 
// import React from 'react';

// eslint-disable-next-line react/prop-types
const StatsCard = ({ icon, color, value, description }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover-zoom transition-transform duration-300">
      <div className={`p-3 rounded-full ${color}`}>
        <i className={`${icon} text-xl`}></i>
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};



const stats = [
    { icon: '<AiOutlineLineChart/>', color: 'bg-blue-100', value: '55%', description: 'Average Salary Hike' },
    { icon: '<ImBooks/>', color: 'bg-red-100', value: '600+', description: 'Different Courses' },
    { icon: 'fas fa-exchange-alt', color: 'bg-pink-100', value: '12000+', description: 'Career Transitions' },
    { icon: 'fas fa-handshake', color: 'bg-yellow-300', value: '400+', description: 'Hiring Partners' },
    { icon: 'fas fa-handshake', color: 'bg-yellow-100', value: '400+', description: 'Projects  Partners' }
  ];

  const DashB = () => {
    return (
      <div className="container items-center mx-auto p-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    );
  };
  export default DashB;
  