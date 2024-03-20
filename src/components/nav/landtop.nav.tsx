import Image from "next/image";
import React from "react";
import LandingPageLink from "./landingpage.nav";
import BurgerMenu from "../utils/burgerMenu.utils";

const LandingTop = () => {
  return (
    <div
      className="
        sticky z-50 py-2 px-5 mb-2 flex flex-row justify-between items-center shadow-xl ring-4 rounded-b-lg
        md:w-full md:px-16 md:self-center
        bg-[#609966]
        dark:bg-[#344955]"
    >
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
        <p className="hidden md:block md:text-3xl dark:md:text-[#78A083] md:text-[#40513B] md:font-bold">
          CryoHub
        </p>
      </div>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
      <div className="md:block hidden">
        <LandingPageLink />
      </div>
    </div>
  );
};

export default LandingTop;
