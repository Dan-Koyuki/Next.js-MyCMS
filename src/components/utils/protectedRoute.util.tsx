'use client';
import React, { useEffect, useState } from 'react'
import { verify } from '../authentication/auth';
import Link from 'next/link';
import LandingTop from '../nav/landtop.nav';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({children}: Props) => {
  const token = String(localStorage.getItem('token'));
  const [isValid, setValid] = useState(false);

  const validityCheck = async () => {
    const validity = await verify(token);
    setValid(validity);
  }

  useEffect(() => {
    validityCheck();
  })

  if (isValid) {
    return <div>{children}</div>;
  } else {
    return (
      <div
        className="flex flex-col min-h-screen bg-[#EDF1D6] text-black
        dark:bg-[#35374B] dark:text-white"
      >
        <LandingTop />
        <div className="flex flex-col justify-center items-center">
          <h1 className='md:text-6xl md:mt-36'>Your Session is expired!</h1>
          <Link className='md:text-4xl border-b-4' href={"/"}>go to main page</Link>
        </div>
      </div>
    );
  }
};

export default ProtectedRoute