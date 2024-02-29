import Image from "next/image";
import Hero from "./components/HeroComponents";
import { furniture, furnitureProduct } from "@/app/data/data";
import Button from "./components/Button";
import AboutImage from "@/public/img/furniture/about.avif";
import footer1 from "@/public/img/footer1.avif";

import Product from "./components/Product";
export default function Home() {
  return (
    <main className="overflow-hidden	">
      <Hero />
      <div className="container mx-auto my-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {furniture.map((item, index) =>
            index == 0 ? (
              <div
                className="row-span-2  w-full sm:h-full h-[300px] overflow-hidden rounded-lg bg-cover bg-bottom relative"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-10 py-10 absolute ">
                  <Button text={item.btn_text} type="fill" />
                  <h2 className="font-bold text-2xl sm:text-4xl my-2">
                    {item.name}
                  </h2>
                </div>
              </div>
            ) : (
              <div
                className="  w-full h-[300px] overflow-hidden rounded-lg bg-cover bg-center relative"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-7 py-7 ">
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
        <div className="grid sm:grid-cols-3 gap-4">
          {furnitureProduct.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 items-center bg-[#f2f6ee] container mx-auto p-4 rounded-lg my-4">
        <div className="">
          <Image
            src={AboutImage}
            alt="about image"
            className="sm:h-[550px] h-[300px] w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="capitalize sm:text-4xl text-2xl font-bold">
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
        className="w-full container mx-auto h-[300px] sm:h-[450px] overflow-hidden rounded bg-cover bg-center pl-5 my-4"
        style={{ backgroundImage: `url('${footer1.src}')` }}
      >
        <div className="container mx-auto sm:pt-32 pt-5 pl-4">
          <div className="w-[45%] py-3 px-3">
            <h1 className="sm:text-4xl text-xl  font-bold">
              Transform Your Home <br /> with Our Stylish <br /> Furniture !!!
            </h1>
            <p className="my-3 sm:block hidden">
              Transform your dream space into reality with our exquisite
              furniture collection.
            </p>
            <div className="flex gap-3 sm:pt-0 pt-5">
              <Button text="Buy Now" type="fill" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
