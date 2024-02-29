import PageTitle from "@/app/components/PageTitle";
import Image from "next/image";
import ContactImage from '@/public/img/contact.jpg'
import Button from "@/app/components/Button";

const Contact = () => {
  return (
    <div className="mb-10">
      <PageTitle title="Contact us" />
      <div className="container mx-auto grid sm:grid-cols-2 my-10 gap-10 px-4">
        <div>
            <Image src={ContactImage} className="w-full h-[300px] sm:h-[560px] object-cover rounded-xl" alt="contact image"/>
        </div>
        <div className="w-full mb-10">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Name
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="appearance-none h-[250px] block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                >
                </textarea>
              </div>
            </div>
            <Button text="Send" type="fill" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
