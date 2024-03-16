'use client'
import React, { useEffect, useRef, useState } from 'react'

type AuthProps = {
  state: string;
  modalSetting: boolean;
  closeFunc: () => void;
};

const AuthModal = ({state, modalSetting, closeFunc} : AuthProps) => {
  const modalRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (modalSetting) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modalSetting]);

  const close = () => {
    closeFunc();
    modalRef.current?.close();
  };

  const Auth = (username: string, pass: string, email?: string) => {
    if (state === "Sign In") {
      // Sign In / Login Logic
      console.log("hello this is from sign in");
    } else if (state === "Sign Up") {
      // Sign Up / Register Logic
      console.log("hello this is from sign up");
    }
    console.log(username, pass, email?email:"nothing");
    closeFunc();
    modalRef.current?.close();
  };

  return (
    <dialog
      ref={modalRef}
      className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50 w-full md:w-1/4"
      aria-modal={true}
    >
      <div>
        <div className="flex flex-row items-center justify-between mb-4 pt-2 px-5 bg-blue-300">
          <div>
            <h1>{state}</h1>
          </div>
          <button
            onClick={close}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            x
          </button>
        </div>
        <div className="flex flex-col gap-2 py-1 justify-center items-center">
          {state === "Sign Up" && (
            <input
              type="email"
              id='email'
              placeholder="e-mail"
              className="p-1 border border-black rounded-md"
              required={true}
              autoComplete='mobile email'
            />
          )}
          <input
            type="text"
            id='username'
            placeholder="username"
            className="p-1 border border-black rounded-md"
            required={true}
            autoComplete='name'
          />
          <input
            type="password"
            id='password'
            placeholder="password"
            className="p-1 border border-black rounded-md"
            required={true}
            autoComplete='current-password'
          />
        </div>
        <div className="flex flex-row justify-evenly mt-4 py-2 px-5 bg-blue-300">
          <button
            onClick={() => {const usernameInput = (
              document.getElementById("username") as HTMLInputElement
            ).value;
            const passwordInput = (
              document.getElementById("password") as HTMLInputElement
            ).value;
            const emailInput = (
              document.getElementById("email") as HTMLInputElement
            )?.value;
            Auth(usernameInput, passwordInput, emailInput);}}
            className="bg-blue-700 p-2 rounded-2xl"
          >
            {state}
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default AuthModal