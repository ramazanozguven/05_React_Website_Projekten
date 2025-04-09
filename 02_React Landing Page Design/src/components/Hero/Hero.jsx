import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroImg from "../../assets/strawberry.png"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {

    const [sidebar, setSidebar] = React.useState(false);

  return (
    <main className="bg-primary-dark md:py-6 md:px-12">
      <section className="relative min-h-[650px] gradient-primary w-full md:rounded-xl">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            {/* text container */}
            <div className="text-white space-y-4 p-4 md:mt-0 ">
              <h1 className="text-3xl pl-6 md:pl-14">01____________</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">a helthy fruit</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                magnam ut nesciunt amet cupiditate iusto laborum sunt totam
                pariatur, dolor numquam iste.{" "}
              </p>
              <button className="border border-white px-4 py-2 rounded-lg">
                Shop Now
              </button>
            </div>

            {/* image container */}
            <div>
                <img src={HeroImg} alt="" className="w-[400px] img-shadow relative z-[1]"/>
            </div>

            {/* blank container */}
            <div className="md:hidden">
                
            </div>
          </div>
        </div>
        <h1 className="text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow">berries</h1>

        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-bg-primary to-bg-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
