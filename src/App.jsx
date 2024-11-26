import React from 'react';
import { Navbar } from './components/Navbar';
import ServiceExplorer from './components/ServiceExplorer';
import FindClientsBanner from './components/FindClientsBanner';
import FindClienttwo from './components/FindClienttwo';
import ServiceFinder from './components/Topheader';
import SerbviceCard from './components/ServiceCard';
import TestimonialCard from './components/Testemonial';
import Downloadapp from './components/DounloadApp';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <Navbar />
      <ServiceFinder/>
        <ServiceExplorer />
        <FindClientsBanner/>
        <FindClienttwo />
        <SerbviceCard />
        <TestimonialCard/>
        <Downloadapp/>
    </div>
  );
}

export default App;