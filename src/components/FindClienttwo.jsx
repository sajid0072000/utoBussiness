import React from 'react';
import Image5 from "../../public/images/Group 9261.png"


const FindClienttwo = () => {
  return (
    <div className="max-w-[97rem] mx-auto p-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <div>
          <div className="rounded-3xl overflow-hidden">
            <img 
              src={Image5}
              alt="Happy clients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-[#30B8AE] rounded-[32px] p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <span className="text-black font-semibold">For Workers</span>
            
            <h1 className="text-black text-4xl lg:text-5xl font-bold leading-tight">
              Find clients<br />
              near to you.
            </h1>
            
            <p className="text-black/70">
              Lorem ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem ipsum
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white px-6 py-3 rounded-2xl flex items-center justify-between group hover:bg-black hover:text-white transition-all">
                <span className="font-semibold">Submit your Service</span>
                <span className="ml-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </button>
              
              <button className="bg-white px-6 py-3 rounded-2xl flex items-center justify-between group hover:bg-black hover:text-white transition-all">
                <span className="font-semibold">Request for a Requirement</span>
                <span className="ml-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
     
      </div>
    </div>
  );
};

export default FindClienttwo;