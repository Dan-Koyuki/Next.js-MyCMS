"use client";
import React, { useEffect, useState } from "react";
import Register from "../authentication/register.modal";
import Login from "../authentication/login.modal";

const BurgerMenu = () => {
  const [isCollapse, setCollapse] = useState(false);
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
    setCollapse(!isCollapse);
  };

  const SignUp = () => {
    setModalState("Sign Up");
    setModalOpen(true);
    setCollapse(!isCollapse);
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
    <div className="">
      <button onClick={() => setCollapse(!isCollapse)}>Toggle</button>
      {!isCollapse ? null : (
        <div className="absolute z-10 right-3 top-14 border-green-500 border rounded-md p-2 bg-gray-200 text-black">
          {isVerified ? (
            <div
              id="Platform-Nav-Links"
              className="md:mr-2 flex flex-col gap-2 md:gap-6"
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
            flex flex-col gap-2"
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
            <button
              onClick={changeTheme}
              className="bg-[#9DC08B] mt-2 p-2 rounded-2xl text-zinc-800 drop-shadow-lg 
              dark:bg-teal-700 dark:text-gray-200"
            >
              Dark Mode
            </button>
          ) : (
            <button
              onClick={changeTheme}
              className="bg-[#9DC08B] mt-2 p-2 rounded-2xl text-zinc-800 drop-shadow-lg 
              dark:bg-teal-700 dark:text-gray-200"
            >
              Light Mode
            </button>
          )}
        </div>
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

export default BurgerMenu;
