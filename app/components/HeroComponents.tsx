import HeroImg from "@/public/img/furniture/hero.avif";
import Button from "./Button";
function Hero() {
  return (
    <div
      className="hero relative w-full sm:h-[90vh] h-[60vh] bg-cover bg-bottom"
      style={{ backgroundImage: `url('${HeroImg.src}')` }}
    >
      <div className="hero-content container mx-auto pt-32">
        <div className="sm:w-[45%] py-4 px-5">
          <h1 className="sm:text-4xl sm:text-left text-center text-3xl font-bold py-5 sm:py-0">
            Furnish your dream <br /> with our furniture!
          </h1>
          <p className="my-5 hidden sm:block">
            Transform your dream space into reality with our exquisite furniture
            collection. From sleek modern designs to timeless classics, we offer
            pieces that embody style, comfort, and quality craftsmanship.
          </p>
          <div className="flex gap-3 justify-center my-5">
            <Button text="Buy Now" type="fill" />
            <Button text="Explore" />
          </div>
        </div>
      </div>
      <div className="w-7/12 pl-4 pt-4 bg-white rounded-t-lg rounded-r-lg	bottom-0 right-0 h-[130px] absolute z-10	hidden sm:block">
        <div className="bg-lumiaPrimary-600 w-full rounded-tl-lg h-full flex items-center justify-evenly text-white">
          <div className="flex gap-4 items-center ">
            <h1 className="text-2xl">975+</h1>
            <p className="text-sm	">
              Furniture and <br /> Home Equipment
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl">320+</h1>
            <p className="text-sm	">
              Fresh interior <br /> design theme
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl">462+</h1>
            <p className="text-sm	">
              Happy Client <br /> More Of this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
