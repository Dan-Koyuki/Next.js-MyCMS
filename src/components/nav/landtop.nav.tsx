"use client";
import Image from "next/image";
import React, { useState } from "react";
import Register from "../authentication/register.modal";
import Login from "../authentication/login.modal";

const LandingTop = () => {
  const [modalState, setModalState] = useState("none");
  const [isModalOpen, setModalOpen] = useState(false);

  const SignIn = () => {
    setModalState("Sign In");
    setModalOpen(true);
  };

  const SignUp = () => {
    setModalState("Sign Up");
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalState("none");
    setModalOpen(false);
  };

  return (
    <div className="border sticky z-50 p-2 flex flex-row justify-between items-center">
      <div id="Platform-Logo-Name" className="flex flex-row gap-1 items-center">
        <Image
          src={
            "https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png"
          }
          alt="My-Logo"
          height={2048}
          width={2048}
          priority={true}
          className="w-14"
        />
        <p className="hidden md:block md:text-3xl md:text-sky-700 md:font-bold">
          CryoHub
        </p>
      </div>
      <div
        id="Platform-Nav-Links"
        className="md:mr-2 flex flex-row gap-2 md:gap-6"
      >
        <button
          onClick={SignIn}
          className="bg-sky-200 p-2 rounded-2xl text-zinc-800"
        >
          Sign In
        </button>
        <button
          onClick={SignUp}
          className="bg-sky-300 p-2 rounded-2xl text-zinc-800"
        >
          Sign Up
        </button>
      </div>

      {isModalOpen &&
        (modalState === "Sign Up" ? (
          <Register modalSetting={isModalOpen} closeFunc={CloseModal} />
        ) : (
          <Login modalSetting={isModalOpen} closeFunc={CloseModal} />
        ))}
    </div>
  );
};

export default LandingTop;
