import Image from "next/image";
import Hero from "./components/HeroComponents";
import { furniture, furnitureProduct } from "@/app/data/data";
import Button from "./components/Button";
import AboutImage from "@/public/img/furniture/about.avif";
import footer1 from "@/public/img/footer1.avif";

import Product from "./components/Product";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-2 gap-4">
          {furniture.map((item, index) =>
            index == 0 ? (
              <div
                className="row-span-2 h-full w-full overflow-hidden rounded-lg bg-cover bg-bottom"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-10 py-10">
                  <Button text={item.btn_text} />
                  <h2 className="font-bold text-4xl my-2">{item.name}</h2>
                </div>
              </div>
            ) : (
              <div
                className="  w-full h-[300px] overflow-hidden rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-7 py-7">
                  <Button text={item.btn_text} />
                  <h2 className="font-bold text-3xl my-2">{item.name}</h2>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="products bg-[#f2f6ee] container mx-auto p-4 rounded-lg my-4">
        <h2 className="text-2xl font-bold pb-4">
          Modern design for any budget
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {furnitureProduct.map((item, index) => (
            <Product item={item} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center bg-[#f2f6ee] container mx-auto p-4 rounded-lg my-4">
        <div className="">
          <Image
            src={AboutImage}
            alt="about image"
            className="h-[550px] w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="capitalize text-4xl font-bold">
            What's makes us <br /> Different from others
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            recusandae, autem eligendi minus voluptates iure veniam aut,
            perferendis a optio, inventore omnis temporibus neque vel
            necessitatibus deleniti aperiam iusto ullam.
          </p>
          <Button text="Learn more about us" type="fill" />
        </div>
      </div>
      <div
        className="w-full container mx-auto h-[450px] overflow-hidden rounded bg-cover bg-center pl-5 my-4"
        style={{ backgroundImage: `url('${footer1.src}')` }}
      >
        <div className="container mx-auto pt-32 pl-4">
          <div className="w-[45%] py-3 px-3">
            <h1 className="text-4xl font-bold">
              Transform Your Home <br /> with Our Stylish <br /> Furniture !!!
            </h1>
            <p className="my-3">
              Transform your dream space into reality with our exquisite
              furniture collection.
            </p>
            <div className="flex gap-3">
              <Button text="Buy Now" type="fill" />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-black py-5">
        <h2 className="text-4xl font-bold text-white text-center py-4">Lumia Living Furniture</h2>
          <div className="container mx-auto grid items-center justify-center py-4">
            <ul className="text-white flex gap-4 cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Furniture</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr className=" text-white" />
          <p className="text-center text-white py-2">© 2024. All rights reserved by Lumia Living Furniture.</p>
      </footer>
    </main>
  );
}
