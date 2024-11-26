import React, { useState } from "react";
import Image1 from "../../public/images/Group 38.png";
import Image2 from "../../public/images/Group 41.png";
import Image3 from "../../public/images/Group 47.png";
import Image4 from "../../public/images/Group 39.png";
import Image5 from "../../public/images/Group 48.png";

const ServiceFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularServices = [
    { name: "Gardening", color: "bg-[#e8fb5a]" },
    { name: "Plumbing", color: "bg-[#e8fb5a]" },
    { name: "Electrical", color: "bg-[#e8fb5a]" },
  ];

  const serviceProviders = [
    {
      id: 1,
      image: Image1,
      position: "top-16 left-0",
    },
    {
      id: 2,
      image: Image3,
      position: "top-16 right-0",
    },
    {
      id: 3,
      image: Image2,
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: 4,
      image: Image4,
      position: "bottom-0 left-12",
    },
    {
      id: 5,
      image: Image5,
      position: "bottom-0 right-12",
    },
  ];

  const floatingIcons = [
    { icon: "⚒️", className: "top-8 left-10 bg-gray-200" },
    { icon: "🛠️", className: "top-8 right-10 bg-gray-200" },
    { icon: "🔧", className: "bottom-12 left-10 bg-gray-200" },
    { icon: "⚙️", className: "bottom-12 right-10 bg-black text-white" },
    { icon: "🔨", className: "top-1/2 left-1/2 -translate-x-16 -translate-y-16 bg-gray-200" },
  ];

  return (
    <div className="max-w-[115rem] mx-auto p-6 sm:p-12 relative h-auto md:h-[620px]">
      {/* Text and Search Section */}
      <div className="relative z-10 max-w-lg gap-4 mx-auto md:mx-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center md:text-left">
          Find & Offer
          <br />
          Nearby Services
        </h1>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="text-lg">★</span>
            <span className="text-sm text-gray-600">Popular Services</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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

      {/* Floating Service Provider Images */}
      <div className="absolute top-0 right-0 w-full md:w-[600px] h-auto md:h-[500px]">
        {serviceProviders.map((provider) => (
          <div
            key={provider.id}
            className={`absolute ${provider.position} p-1 transition-transform hover:scale-105`}
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            <div className="overflow-hidden rounded-full">
              <img
                src={provider.image}
                alt="Service Provider"
                className="w-full h-full object-cover"
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
