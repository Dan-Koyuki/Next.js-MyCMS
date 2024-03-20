import LandingTop from '@/components/nav/landtop.nav';
import ProtectedRoute from '@/components/utils/protectedRoute.util'
import React from 'react'

const Home = () => {
  return (
    <ProtectedRoute>
      <div
        className="bg-[#EDF1D6] text-black
        dark:bg-[#35374B] dark:text-white"
      >
        <LandingTop />
      </div>
    </ProtectedRoute>
  );
}

export default Home