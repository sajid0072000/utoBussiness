import React from "react";
import PlaystoreImg from "../../public/images/playstore.png"
import Applestore from "../../public/images/applestore.png"
import Imge1 from "../../public/images/Group9260.png"


export default function Downloadapp() {
  return (
    <div className="bg-[#E1FE3C] rounded-2xl overflow-hidden  mt-10 max-w-[93rem] mx-auto  mb-10">
      <div className="container mx-auto px-9 py-12 relative">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="w-1/2 space-y-6 z-10 mx-5">
            <h2 className="text-5xl font-bold leading-tight">
              Download the
              <br />
              app now!
            </h2>
            <p className="text-lg opacity-80 max-w-md">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
            <div className="flex gap-4 pt-4">
              <img
                src={PlaystoreImg}
                alt="Get it on Google Play"
                className="h-[60px] w-auto"
              />
              <img
                src={Applestore}
                alt="Download on the App Store"
                className="h-[60px] w-auto"
              />
            </div>
          </div>

          {/* Right Content - content img*/}
          <div className="absolute right-0 top-0 h-full w-1/2">
            <img
              src={Imge1}
              alt="App Interface"
              className="object-cover h-[396px] w-[612px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
