import Link from "next/link";
import React from "react";

function Footer() {
  const menuItems = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "About", url: "/about" },
    { id: 3, label: "Furniture", url: "/furniture" },
    { id: 4, label: "Contact", url: "/contact" },
  ];
  return (
    <footer className="w-full bg-black py-5 hidden sm:block">
      <h2 className="text-4xl font-bold text-white text-center py-4">
        Lumia Living Furniture
      </h2>
      <div className="container mx-auto grid items-center justify-center py-4">
        <ul className="text-white flex gap-4 cursor-pointer">
        {menuItems.map((item, index) => (
            <li className="text-white">
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className=" text-white" />
      <p className="text-center text-white py-2">
        © 2024. All rights reserved by Lumia Living Furniture.
      </p>
    </footer>
  );
}

export default Footer;
