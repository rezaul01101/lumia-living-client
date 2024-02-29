import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black py-5 hidden sm:block">
      <h2 className="text-4xl font-bold text-white text-center py-4">
        Lumia Living Furniture
      </h2>
      <div className="container mx-auto grid items-center justify-center py-4">
        <ul className="text-white flex gap-4 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Furniture</li>
          <li>Contact</li>
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
