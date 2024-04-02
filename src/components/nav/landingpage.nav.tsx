"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Register from "../authentication/register.modal";
import Login from "../authentication/login.modal";

const LandingPageLink = () => {
  const [modalState, setModalState] = useState("none");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVerified, setVerified] = useState<boolean>(false);
  const [token, setToken] = useState("");
  const [isDark, setTheme] = useState(true);

  /**
   * Token
   */
  useEffect(() => {
    if (token) {
      setVerified(true);
    }
  }, [token]);

  const tokenSetter = () => {
    setToken(String(localStorage.getItem("token")));
  };

  /**
   * Auth
   */
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

  /**
   * Theme
   */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setTheme(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  const changeTheme = () => {
    setTheme(!isDark);
  };

  return (
    <div className="flex flex-row">
      {isVerified ? (
        <div
          id="Platform-Nav-Links"
          className="md:mr-2 flex flex-row gap-2 md:gap-6"
        >
          <button
            // onClick={}
            className="bg-[#9DC08B] p-2 rounded-2xl text-zinc-800 drop-shadow-lg
              dark:bg-teal-700 dark:text-gray-200"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div
          id="Platform-Nav-Links"
          className="
            flex flex-row gap-2 
            md:gap-6 md:mr-2"
        >
          <button
            onClick={SignIn}
            className="bg-[#9DC08B] p-2 rounded-2xl text-zinc-800 drop-shadow-lg
              dark:bg-teal-700 dark:text-gray-200"
          >
            Sign In
          </button>
          <button
            onClick={SignUp}
            className="bg-[#9DC08B] p-2 rounded-2xl text-zinc-800 drop-shadow-lg 
              dark:bg-teal-700 dark:text-gray-200"
          >
            Sign Up
          </button>
        </div>
      )}
      {isDark ? (
        <Image
          alt="Dark Mode"
          src={
            "https://res.cloudinary.com/dankoyuki/image/upload/v1710897805/Icons/lvfrh6uwhwke8l88fnt2.png"
          }
          width={512}
          height={512}
          className="w-10 ml-4 cursor-pointer drop-shadow-lg"
          onClick={changeTheme}
        />
      ) : (
        <Image
          alt="Light Mode"
          src={
            "https://res.cloudinary.com/dankoyuki/image/upload/v1710897802/Icons/dvcfrbal0h7juliixhgd.png"
          }
          width={512}
          height={512}
          className="w-10 ml-4 cursor-pointer drop-shadow-lg"
          onClick={changeTheme}
        />
      )}

      {isModalOpen &&
        (modalState === "Sign Up" ? (
          <Register
            modalSetting={isModalOpen}
            closeFunc={CloseModal}
            tokenSetter={tokenSetter}
          />
        ) : (
          <Login
            modalSetting={isModalOpen}
            closeFunc={CloseModal}
            tokenSetter={tokenSetter}
          />
        ))}
    </div>
  );
};

export default LandingPageLink;
