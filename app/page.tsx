import Image from "next/image";
import Hero from "./components/HeroComponents";
import { furniture, furnitureProduct } from "@/app/data/data";
import Button from "./components/Button";
import AboutImage from "@/public/img/furniture/about.avif";

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
      <div className="grid grid-cols-2 gap-10 items-center bg-[#f2f6ee] container mx-auto p-4 rounded-lg">
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
          <p className="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam recusandae, autem eligendi minus voluptates iure veniam aut, perferendis a optio, inventore omnis temporibus neque vel necessitatibus deleniti aperiam iusto ullam.</p>
          <Button text="Learn more about us" type="fill" />
        </div>
      </div>
    </main>
  );
}
