"use client";

import React, { useState } from "react";
import { AuthProps, register } from "./auth";
import { useRouter } from "next/navigation";

const Register = ({ modalSetting, closeFunc, tokenSetter }: AuthProps) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const close = () => {
    closeFunc();
  };

  const validateEmail = (email: string) => {
    // Very basic email validation, you may need a more robust solution
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleAuth = async () => {
    if (!username || !password || !email) {
      alert("Please fill in all fields");
      return;
    }
    // Perform email format validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await register({ username, password, email });
      close();
      tokenSetter();
      router.push('home');
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <dialog
      className={`fixed inset-0 z-10 flex items-center justify-center w-full rounded-2xl md:w-1/4 ${
        modalSetting ? "block" : "hidden"
      }`}
      aria-modal={true}
    >
      <div className="w-full">
        <div className="flex flex-row items-center justify-between mb-4 pt-2 px-5 bg-blue-300 rounded-t-xl">
          <div className="font-semibold text-3xl">
            <h1>Register</h1>
          </div>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <div className="flex flex-col gap-2 py-1 justify-center items-center">
          <input
            type="email"
            id="email"
            placeholder="e-mail"
            className="p-1 border border-black rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="text"
            id="username"
            placeholder="username"
            className="p-1 border border-black rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="p-1 border border-black rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <div className="flex flex-row justify-evenly mt-4 py-2 px-5 bg-blue-300 rounded-b-xl">
          <button onClick={handleAuth} className="bg-blue-700 p-2 rounded-2xl">
            submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Register;
