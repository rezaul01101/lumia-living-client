"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/logo-transparent.png";
import Image from "next/image";
import { FiHome, FiMail, FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar=()=> {
  const path=usePathname();

  const menuItems = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "About", url: "/about" },
    { id: 3, label: "Furniture", url: "/furniture" },
    { id: 4, label: "Contact", url: "/contact" },
  ];

  const [stickyActive, setStickyActive] = useState<boolean>(false);
  useEffect(() => {
    const scrollActive = () => {
      setStickyActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [stickyActive]);
  return (
    <div
      className={`${
        stickyActive ? "shadow-lg bg-[#eeeeee]" : "bg-[#eeeeee71]"
      } nav w-full sm:px-10 px-5 mx-auto flex items-center h-[68px] fixed justify-between z-[100]`}
    >
      <div className="logo flex gap-2 items-center	">
        <Image src={logo} width={60} height={60} alt="logo" />
        <h4 className="mt-2 font-semibold"><Link href={'/'}>LUMIA LIVING FURNITURE</Link></h4>
      </div>
      <div className="menu">
        <ul className="sm:flex gap-6 mt-2 font-semibold hidden ">
          {menuItems.map((item, index) => (
            <li className={`cursor-pointer  ${path == item.url ? "text-lumiaPrimary-600" : ""}`}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-right">
        <AiOutlineUser className="text-xl cursor-pointer" />
      </div>

      {/* mobile bottom navigation bar */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full">
        <div className="grid grid-cols-4 w-full bg-white h-[55px] items-center justify-between">
          <div className={`h-[45px] flex flex-col items-center justify-center  ${path == '/' ? "text-lumiaPrimary-600" : ""}`}>
            <FiHome className="text-[50px]" />
            <p className="text-sm">
              <Link href={"/"}>Home</Link>
            </p>
          </div>
          <div className="h-[45px]  flex flex-col items-center justify-center">
            <FiShoppingCart className="text-[50px]" />
            <p className="text-sm">Cart</p>
          </div>
          <div className={`h-[45px] flex flex-col items-center justify-center ${path == '/furniture' ? "text-lumiaPrimary-600" : ""}`}>
            <AiOutlineShopping className="text-[50px]" />
            <p className="text-sm">
              <Link href={"/furniture"}>Shop</Link>
            </p>
          </div>
          <div className={`h-[45px] flex flex-col items-center justify-center ${path == '/contact' ? "text-lumiaPrimary-600" : ""}`}>
            <FiMail className="text-[50px]" />
            <p className="text-sm">
              <Link href={"/contact"}>Contact</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
