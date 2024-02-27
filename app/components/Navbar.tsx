import React from "react";
import logo from "@/public/img/logo-transparent.png";
import Image from "next/image";
import { FiHome,FiMail,FiShoppingCart} from "react-icons/fi";
import { AiOutlineUser,AiOutlineShopping } from "react-icons/ai";;

function Navbar() {
  return (
    <div className="bg-[#eeeeee71] w-full sm:px-10 px-5 mx-auto flex items-center h-[68px] fixed justify-between z-[100]">
      <div className="logo flex gap-2 items-center	">
        <Image src={logo} width={60} height={60} alt="logo" />
        <h4 className="mt-2 font-semibold">LUMIA LIVING FURNITURE</h4>
      </div>
      <div className="menu">
        <ul className="sm:flex gap-6 mt-2 font-semibold hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Furniture</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="menu-right">
        <AiOutlineUser className="text-xl cursor-pointer" />
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 w-full">
        <div className="grid grid-cols-4 w-full bg-white h-[55px] items-center justify-between">
          <div className="h-[45px] flex flex-col items-center justify-center">
            <FiHome className="text-[50px]"/>
            <p className="text-sm">Home</p>
          </div>
          <div className="h-[45px]  flex flex-col items-center justify-center">
            <FiShoppingCart className="text-[50px]"/>
            <p className="text-sm">Cart</p>
          </div>
          <div className="h-[45px] flex flex-col items-center justify-center">
            <AiOutlineShopping className="text-[50px]"/>
            <p className="text-sm">Shop</p>
          </div>
          <div className="h-[45px] flex flex-col items-center justify-center">
            <FiMail className="text-[50px]"/>
            <p className="text-sm">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
