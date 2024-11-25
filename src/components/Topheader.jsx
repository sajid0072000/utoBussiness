import React, { useState } from 'react';
import Image1 from "../../public/images/Group 38.png"
import Image2 from "../../public/images/Group 41.png"
import Image3 from "../../public/images/Group 47.png"
import Image4 from "../../public/images/Group 39.png"
import Image5 from "../../public/images/Group 48.png"

const ServiceFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const popularServices = [
    { name: 'Gardening', color: 'bg-[#e8fb5a]' },
    { name: 'Plumbing', color: 'bg-[#e8fb5a]' },
    { name: 'Electrical', color: 'bg-[#e8fb5a]' }
  ];

  const serviceProviders = [
    {
      id: 1,
      image: "../../public/images/Group 38.png",
      position: 'top-16 left-0 ' ,
    },
    {
      id: 2,
      image: "../../public/images/Group 47.png",
      position: 'top-16 right-0',
    },
    {
      id: 3,
      image: "../../public/images/Group 41.png",
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    },
    {
      id: 4,
      image:"../../public/images/Group 39.png",
      position: 'bottom-0 left-12',
    },
    {
      id: 5,
      image:"../../public/images/Group 48.png",
      position: 'bottom-0 right-12',
    }
  ];

  const floatingIcons = [
    { icon: '⚒️', className: 'top-8 left-32 bg-gray-200' },
    { icon: '🛠️', className: 'top-8 right-32 bg-gray-200' },
    { icon: '🔧', className: 'bottom-16 left-48 bg-gray-200' },
    { icon: '⚙️', className: 'bottom-16 right-48 bg-black text-white' },
    { icon: '🔨', className: 'top-1/2 left-1/2 -translate-x-16 -translate-y-16 bg-gray-200' }
  ];

  return (
    <div className="max-w-[115rem] mx-auto p-[9.5rem] relative h-[620px]">
      <div className="relative z-10 max-w-lg gap-4">
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          Find & Offer
          <br />
          Nearby Services
        </h1>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">★</span>
            <span className="text-sm text-gray-600">Popular Services</span>
          </div>
          
          <div className="flex gap-2">
            {popularServices.map((service, index) => (
              <span
                key={index}
                className={`${service.color} px-3 py-1 rounded-full text-sm`}
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for Services"
            className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
            Search now
          </button>
        </div>
      </div>

      {/* Floating Service Provider Images Container */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px]">
  {serviceProviders.map((provider) => (
    <div
      key={provider.id}
      className={`absolute ${provider.backgroundColor} ${provider.position} p-1 transition-transform hover:scale-105`}
      style={{
        width: '130px',
        height: '130px',
      }}
    >
      <div className="overflow-hidden">
        <img
          src={provider.image}
          alt="Service Provider"
          className="w-[250px] h-[250px] object-cover"
        />
      </div>
    </div>
  ))}

  {floatingIcons.map((item, index) => (
    <div
      key={index}
      className={`absolute ${item.className} w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md transition-transform hover:scale-110`}
    >
      {item.icon}
    </div>
  ))}
</div>
    </div>
  );
};

export default ServiceFinder;