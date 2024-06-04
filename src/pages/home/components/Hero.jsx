import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="px-6">
      <div className="container mx-auto flex flex-col items-center md:min-h-screen md:flex-row lg:px-9">
        <div className="order-2 flex flex-col gap-5 md:order-1 md:mr-14 md:w-64 md:flex-1">
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
        <div className="order-1 my-20 flex w-64 flex-1 justify-center gap-8 sm:w-96 md:order-2 md:w-32 lg:my-40">
          <div className="flex flex-col gap-3">
            <img src="/img/home/hero_1.png" alt="" />
            <div className="flex items-center justify-center gap-1">
              <img className="" src="/img/home/at.png" alt="" />
              <p className="text-xs">by Guzmán Barquín</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-end md:pt-10">
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
        <div className="hidden justify-center xl:flex">
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
            <div className="flex w-full items-center justify-between">
              <h1 className="text-lg font-bold md:text-4xl">Popular Topic</h1>
              <div className="flex items-center gap-3">
                <p className="text-sm">Show All Blog</p>
                <span>
                  <img
                    className="w-4 object-contain"
                    src="/img/home/up-right-arrow 1.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="my-10 flex w-full flex-col justify-between sm:flex-row">
              <div className="flex gap-3 rounded-lg px-4 py-3 outline-slate-200 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="h-20 w-20 rounded-full">
                  <img src="/img/home/topic/img.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Daily</h5>
                  <p className="text-sm">Daily activities</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg px-4 py-3 outline-slate-200 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="h-20 w-20 rounded-full">
                  <img src="/img/home/topic/img-1.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Web Develop</h5>
                  <p className="text-sm">All about websites</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-lg px-4 py-3 outline-slate-200 transition-all duration-300 ease-in-out hover:outline hover:outline-1 hover:outline-offset-0 sm:min-w-52 sm:max-w-52 md:min-w-60 md:max-w-60 lg:min-w-72 lg:max-w-72">
                <div className="h-20 w-20 rounded-full">
                  <img src="/img/home/topic/img-2.png" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-lg font-semibold">Tips</h5>
                  <p className="text-sm">Tips & Trick</p>
                </div>
              </div>
            </div>
            <div className="my-10 flex w-full flex-wrap justify-center gap-3 sm:gap-7 md:gap-5 lg:gap-5 xl:justify-start">
              <Link to={'/detail/test'} className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </Link>
              <div className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </div>
              <div className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </div>
              <div className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </div>
              <div className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </div>
              <div className="xl:max-w- flex min-w-32 max-w-32 flex-col gap-3 rounded-lg px-2 pb-3 pt-3 outline outline-1 outline-slate-200 sm:min-w-32 sm:max-w-48 sm:basis-1/2 md:min-w-40 md:max-w-56 md:rounded-[32px] md:px-3 md:pb-8 lg:max-w-64">
                <a href="./detail-article.html">
                  <img src="/img/home/card.png" alt="" />
                  <h1 className="text-xs md:text-xl">
                    Simple Juice Recipes to boost your immune system
                  </h1>
                </a>
              </div>
            </div>
            <button className="btn-primary-sm md:btn-primary-lg mx-auto">
              See more
            </button>
          </div>
          <div id="hot-topic" className="my-10 hidden flex-col lg:flex">
            <h1 className="my-10 text-center text-3xl font-semibold">
              Hot topics now
            </h1>
            <div className="flex justify-between gap-10">
              <div className="relative h-[32rem] basis-2/6 flex-1 hover:basis-4/6 transition-all ease-in-out duration-300 rounded-2xl bg-slate-600 p-8">
                <div className="absolute bottom-12 max-w-64 text-2xl font-bold">
                  <p className="my-4 w-fit rounded-3xl bg-slate-100 px-4 py-1 text-xs uppercase">
                    coding
                  </p>
                  <h1>How to become a good programmer?</h1>
                  <p className="my-4 text-base text-gray-400">
                    written by
                    <span className="text-orange-500 underline">
                      ahmakbar.dev
                    </span>
                    published on <span className="text-black"> December</span>
                  </p>
                </div>
              </div>
              <div className="relative h-[32rem] basis-2/6 rounded-2xl bg-slate-200 p-8 transition-all duration-300 ease-in-out hover:basis-4/6">
                <div className="absolute bottom-12 max-w-64 text-2xl font-bold">
                  <p className="my-4 w-fit rounded-3xl bg-slate-100 px-4 py-1 text-xs uppercase">
                    coding
                  </p>
                  <h1>How to become a good programmer?</h1>
                  <p className="my-4 text-base text-gray-400">
                    written by
                    <span className="text-orange-500 underline">
                      ahmakbar.dev
                    </span>
                    published on <span className="text-black"> December</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-28 hidden h-fit basis-3/12 xl:flex">
          <div className="flex h-fit w-full flex-col gap-7 px-10">
            <h1 className="text-xl font-bold">Top Contributor</h1>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="/img/home/account/account_1.png"
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-md font-semibold">Andrea Wise</h5>
                  <p className="text-xs text-gray-500">12 articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="/img/home/account/account_2.png"
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-md font-semibold">Andrea Wise</h5>
                  <p className="text-xs text-gray-500">12 articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="/img/home/account/account_3.png"
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-md font-semibold">Andrea Wise</h5>
                  <p className="text-xs text-gray-500">12 articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="/img/home/account/account_4.png"
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-md font-semibold">Andrea Wise</h5>
                  <p className="text-xs text-gray-500">12 articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full">
                  <img
                    src="/img/home/account/account_5.png"
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-md font-semibold">Andrea Wise</h5>
                  <p className="text-xs text-gray-500">12 articles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
