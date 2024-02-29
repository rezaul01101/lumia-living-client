import PageTitle from "@/app/components/PageTitle";
import { Teams } from "@/app/data/data";
import AboutImage from "@/public/img/about_page.jpg";
import Image from "next/image";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <PageTitle title="About us" />
      <div className="container mx-auto my-10">
        <div className="grid sm:grid-cols-2  gap-10 px-4">
          <div
            className="w-full sm:h-[550px] h-[350px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('${AboutImage.src}')` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold">History of Our Company</h3>
            <p className="text-xl my-2">
              Our Shop is a fast fashion retailer headquartered in Los Angeles,
              California. It is very slick and clean e-commerce template with
              endless possibilities.
            </p>
            <div className="grid sm:grid-cols-2  gap-3">
              <div>
                <h3 className="text-4xl font-bold my-4">8,500+</h3>
                <h4 className="text-xl font-bold">Satisfied Customers</h4>
                <p>
                  Amazing designs & collaborations, and as always 100% Organic
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold my-4">2,585</h3>
                <h4 className="text-xl font-bold">Creative Ideas</h4>
                <p>
                  Everything you wanted to know about your fave fashion brand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 py-10">
          <p className="text-2xl text-justify sm:w-[60%] w-full px-3 mx-auto">
            Portland meggings chartreuse plaid palo santo, gluten-free ramps
            iPhone etsy salvia cray kombucha copper mug single-origin coffee.It
            is the largest independent online fashion and beauty retailer and
            offers over 1 branded products. Founders worked for selling.com, and
            left to create their new company incorporated in April 2015 as Amela
            Online Store Central London, Kensington a that mainly focused in
            online shopping. Amela is a beauty online shop offering best
            innovative, professional beauty products and focus on facial and
            body care treatment to make the skin smooth, beautiful and healthy.
          </p>
        </div>
        <div className="container mx-auto px-2">
          <p className="text-xl text-center">PASIONATE PEOPLE</p>
          <h2 className="text-center text-4xl font-bold my-5">
            Team of Experts
          </h2>
          <div className="grid sm:grid-cols-5 gap-3 my-5">
            {Teams.map((item, index) => (
              <div className="border rounded-lg h-[300px] flex flex-col items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-[140px] h-[150px] object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-bold">{item.name}</h3>
                <h3 className="text-sm">{item.designation}</h3>
                <div className="flex my-2 gap-2">
                  <FaFacebookSquare className="text-xl"/>
                  <FaTwitterSquare className="text-xl"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
