import React from 'react';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Landscaping Services for your Home",
    price: 250,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=600",
    provider: {
      name: "Robin John",
      verified: true,
      rating: 4.9
    }
  },
  {
    id: 2,
    title: "Professional Car Detailing",
    price: 250,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600",
    provider: {
      name: "Robin John",
      verified: true,
      rating: 4.8
    }
  },
  {
    id: 3,
    title: "Garden Maintenance",
    price: 250,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
    provider: {
      name: "Robin John",
      verified: true,
      rating: 4.7
    }
  },
  {
    id: 4,
    title: "Pressure Washing",
    price: 250,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1610476840592-0b4c45b5ff0e?auto=format&fit=crop&q=80&w=600",
    provider: {
      name: "Robin John",
      verified: true,
      rating: 5.0
    }
  }
];

function SerbviceCard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[94rem] mx-auto">
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
              Browse more
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <button className="absolute bottom-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                      {service.provider.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">{service.provider.name}</p>
                        {service.provider.verified && (
                          <svg className="h-4 w-4 ml-1.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center mt-0.5">
                        <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{service.provider.rating}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/ Hour</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {service.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Requests</h2>
            <button className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
              Browse more
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <button className="absolute bottom-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                      {service.provider.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">{service.provider.name}</p>
                        {service.provider.verified && (
                          <svg className="h-4 w-4 ml-1.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center mt-0.5">
                        <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{service.provider.rating}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/ Hour</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {service.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SerbviceCard;