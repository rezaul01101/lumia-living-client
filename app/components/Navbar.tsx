import React from "react";
import logo from "@/public/img/logo-transparent.png";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
function Navbar() {
  return (
    <div className="bg-[#eeeeee71] w-full px-10 mx-auto flex items-center h-[68px] fixed justify-between z-[100]">
      <div className="logo flex gap-2 items-center	">
        <Image
          src={logo}
          width={60}
          height={60}
          alt="logo"
        />
        <h4 className="mt-2 font-semibold">LUMIA LIVING FURNITURE</h4>
      </div>
      <div className="menu">
        <ul className="flex gap-6 mt-2 font-semibold">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Furniture</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="menu-right">
        <AiOutlineUser className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
