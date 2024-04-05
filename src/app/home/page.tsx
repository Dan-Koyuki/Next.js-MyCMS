import LandingTop from '@/components/nav/landtop.nav';
import SideBar from '@/components/nav/sidebar.nav';
import ProtectedRoute from '@/components/utils/protectedRoute.util'
import React from 'react'
import HomeContent from './content';

const Home = () => {
  return (
    // <ProtectedRoute>
    <div
      className="absolute bg-[#EDF1D6] text-black flex flex-col overflow-hidden
        dark:bg-[#35374B] dark:text-white"
    >
      <div className="sticky">
        <LandingTop />
      </div>
      <div className="flex flex-row w-full">
        <div className="sticky w-1/4 overflow-hidden">
          <SideBar />
        </div>
        <div className="relative w-3/4">
          <HomeContent />
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
}

export default Home