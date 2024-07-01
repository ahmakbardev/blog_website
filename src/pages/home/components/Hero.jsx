import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="px-6">
      <div className="container flex flex-col items-center mx-auto md:min-h-screen md:flex-row lg:px-9">
        <div className="flex flex-col order-2 gap-5 md:order-1 md:mr-14 md:w-64 md:flex-1">
          <h1 className="text-3xl font-semibold md:text-6xl 2xl:text-7xl">
            Create your blog with your own
            <div className="relative w-fit">
              <span className="relative underline decoration-orange-300 decoration-wavy decoration-4 hover:underline-offset-8 hover:transition-all hover:ease-custom-ease-out">
                Creativity!
              </span>
            </div>
          </h1>
          <p className="text-sm md:text-lg">
            Don't waste time and join our community of authors! Share your
            knowledge and experience with our readers and get the opportunity to
            become a part of our professional and creative team!
          </p>
          <button className="btn-primary-sm md:btn-primary-lg">
            Create your article
          </button>
        </div>
        <div className="flex justify-center flex-1 order-1 w-64 gap-8 my-20 sm:w-96 md:order-2 md:w-32 lg:my-40">
          <div className="flex flex-col gap-3">
            <img src="/img/home/hero_1.png" alt="" />
            <div className="flex items-center justify-center gap-1">
              <img className="" src="/img/home/at.png" alt="" />
              <p className="text-xs">by Guzmán Barquín</p>
            </div>
          </div>
          <div className="flex flex-col self-end gap-3 md:pt-10">
            <div className="flex items-center justify-center gap-1">
              <img className="" src="/img/home/at.png" alt="" />
              <p className="text-xs">by Guzmán Barquín</p>
            </div>
            <img src="/img/home/hero_2.png" alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <img src="/img/home/hero_3.png" alt="" />
            <div className="flex items-center justify-center gap-1">
              <img className="" src="/img/home/at.png" alt="" />
              <p className="text-xs">by Guzmán Barquín</p>
            </div>
          </div>
        </div>
        <div className="justify-center hidden xl:flex">
          <div className="">
            <div
              id="scroll-down"
              className="scroll-down"
              style={{
                width: "1em",
                height: "1em",
                backgroundColor: "transparent",
                zIndex: 1,
                bottom: "25px",
                position: "absolute",
                borderWidth: "0 0.25em 0.25em 0",
                borderStyle: "solid",
                borderColor: "rgb(0, 0, 0)",
                animation: "scrolldown 1.2s ease-in-out infinite 0.15s",
              }}
            ></div>
            <div
              id="scroll-down"
              className="scroll-down"
              style={{
                width: "1em",
                height: "1em",
                backgroundColor: "transparent",
                zIndex: 1,
                bottom: "40px",
                position: "absolute",
                borderWidth: "0 0.25em 0.25em 0",
                borderStyle: "solid",
                borderColor: "rgb(0, 0, 0)",
                animation: "scrolldown 1.2s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="container relative mx-auto my-16 md:my-0 lg:flex lg:gap-3">
        <div className="xl:basis-9/12">
          <div className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-lg font-bold md:text-4xl">Popular Topic</h1>
              <div className="flex items-center gap-3">
                <p className="text-sm">Show All Blog</p>
                <span>
                  <img
                    className="object-contain w-4"
                    src="/img/home/up-right-arrow 1.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full my-10 sm:flex-row">
              <div className="flex gap-3 px-4 py-3 transition-all duration-300 ease-in-out rounded-lg outline-slate-200 hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="w-20 h-20 rounded-full">
                  <img src="/img/home/topic/img.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Daily</h5>
                  <p className="text-sm">Daily activities</p>
                </div>
              </div>
              <div className="flex gap-3 px-4 py-3 transition-all duration-300 ease-in-out rounded-lg outline-slate-200 hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="w-20 h-20 rounded-full">
                  <img src="/img/home/topic/img-1.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Web Develop</h5>
                  <p className="text-sm">All about websites</p>
                </div>
              </div>
              <div className="flex gap-3 px-4 py-3 transition-all duration-300 ease-in-out rounded-lg outline-slate-200 hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="w-20 h-20 rounded-full">
                  <img src="/img/home/topic/img-2.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Tips</h5>
                  <p className="text-sm">Tips & Trick</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start xl:max-w- lg:gap-5 xl:justify-start">
              <div className="xl:max-w- flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/3 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <Link to="/detail">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </Link>
              </div>

              <div className="xl:max-w- flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/3 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <Link to="/detail">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </Link>
              </div>

              <div className="xl:max-w- flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/3 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <Link to="/detail">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </Link>
              </div>

              <div className="xl:max-w- flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/3 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <Link to="/detail">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex lg:flex-1">
          <div className="absolute right-0 w-[345px] h-[408px] overflow-hidden rounded-3xl">
            <img
              src="/img/home/banner.png"
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
