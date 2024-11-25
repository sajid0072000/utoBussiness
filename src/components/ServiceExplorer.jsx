import React from 'react';
import Image1 from "../../public/images/Group 38.png"
import Image2 from "../../public/images/Group 41.png"
import Image3 from "../../public/images/Group 47.png"
import Image4 from "../../public/images/Group 39.png"
import Image5 from "../../public/images/Group 48.png"
import Image6 from "../../public/images/Group72.png"

import { PaintBucket } from 'lucide-react';


const ExploreServices = () => {
  const stats = [
    { value: "456+", label: "Jobs", color: "bg-orange-100 text-orange-600" },
    { value: "456+", label: "Reviews", color: "bg-rose-100 text-rose-600" },
    { value: "456+", label: "Clients", color: "bg-teal-100 text-teal-600" },
  ];

  const services = [
    { title: 'Gardening', color: 'bg-emerald-100', iconColor: 'text-emerald-500' },
    { title: 'Plumbing Services', color: 'bg-orange-100', iconColor: 'text-orange-500' },
    { title: 'Electrical Services', color: 'bg-amber-100', iconColor: 'text-amber-500' },
    { title: 'Pest Control', color: 'bg-teal-100', iconColor: 'text-teal-500' },
    { title: 'Painting Services', color: 'bg-rose-100', iconColor: 'text-rose-500' },
    { title: 'Cleaning Services', color: 'bg-blue-100', iconColor: 'text-blue-500' },
  ];

  return (
    <div className="container mx-auto bg-black text-white p-5 rounded-2xl" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-10">
          <div className="bg-white text-black rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <img
                src={Image4}
                alt="Profile"
                className="w-15 h-16 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Arjun Joy</h3>
                  <span className="text-blue-500"><img  className="w-3 h-3"   src={Image6} alt=""  /></span>
                  <div style={{marginLeft:"141px"}}>
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-500">5 Star (746 Reviews)</span>
            </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-100 text-xs px-2 py-0.5 rounded-full">Repair</span>
                  <span className="bg-blue-100 text-xs px-2 py-0.5 rounded-full">AC Technician</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-lg px-3 py-1 flex-1 text-center`}>
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Explore <span className="text-green-400">3000+</span><br />
              Services
            </h1>
            <p className="text-gray-400 max-w-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem ipsum has been the industry's standard dummy text since the 1500s.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-green-500 px-6 py-2 rounded-lg text-white font-semibold">
                Get Started
              </button>
              <button className="border border-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-fit">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                <div className={`${service.iconColor} text-xl`}><PaintBucket /></div>
              </div>
              <h4 className="text-black font-semibold">{service.title}</h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum is simply dummy text of the printing and setting.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;