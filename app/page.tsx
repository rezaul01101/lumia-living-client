import Image from "next/image";
import Hero from "./components/HeroComponents";
import { furniture } from "@/app/data/data";
import fur from "@/public/img/furniture/f-1.avif";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-2 gap-4">
          {furniture.map((item, index) =>
            index == 0 ? (
              <div
                className="row-span-2 bg-green-600 h-full w-full overflow-hidden rounded-lg bg-cover bg-bottom"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-10 py-10">
                  <button className="border text-[#689a37] border-[#689a37] hover:bg-green-700 hover:text-white font-bold py-3 px-10 rounded-full">
                    {item.btn_text}
                  </button>
                  <h2 className="font-bold text-4xl my-2">{item.name}</h2>
                </div>
              </div>
            ) : (
              <div
                className=" bg-red-600 w-full h-[300px] overflow-hidden rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image.src}')` }}
              >
                <div className="px-7 py-7">
                  <button className="border text-[#689a37] border-[#689a37] hover:bg-green-700 hover:text-white font-bold py-2 px-8 rounded-full">
                    {item.btn_text}
                  </button>
                  <h2 className="font-bold text-3xl my-2">{item.name}</h2>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
