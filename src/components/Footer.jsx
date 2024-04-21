import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative mt-10 gap-3 bg-slate-200 py-20">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold">Need more info?</h1>
          <form
            action=""
            className="flex flex-col justify-between gap-4 rounded-lg bg-white px-4 py-6 md:flex-row w-3/4 xl:w-1/2"
          >
            <div className="flex basis-2/3 items-center gap-3">
              <label htmlFor="email">
                <img
                  src="/img/home/ic-actions-user.png"
                  className="h-fit object-contain"
                  alt=""
                />
              </label>
              <input
                name="email"
                type="email"
                className="w-full border-b-2 px-1 py-2 focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <button
              type="submit"
              className="btn-primary-sm w-full basis-1/4 bg-orange-500 md:w-fit"
            >
              Contact Us Now
            </button>
          </form>
          <p className="text-center text-gray-500">
            By clicking on “Contact Us Now” button I agree that my <br />
            submitted data is being
            <span className="underline">collected and stored.</span>
          </p>
        </div>
      </div>
      <footer className="mb-16 font-bold md:mb-0">
        <div className="flex flex-col gap-10 p-10 md:flex-row md:gap-40">
          <section className="basis-2/5">
            <img src="/img/logo_2.png" alt="" className="pb-5" />
            <div className="text-gray-400">
              <p className="pb-5">
                Opening creativity without limits via ultimate bloging platform
                conecting all creative souls together.
              </p>
              <p className="font-serif">By Acmee 2021</p>
            </div>
          </section>
          <div className="flex basis-1/5 justify-between sm:justify-start sm:gap-10 md:gap-52">
            <section className="">
              <h4 className="pb-5 text-orange-500">CATEGORIES</h4>
              <ul>
                <li className="pb-5">
                  <a href="">All categories</a>
                </li>
                <li className="pb-5">
                  <a href="">Daily</a>
                </li>
                <li className="pb-5">
                  <a href="">Health</a>
                </li>
                <li className="pb-5">
                  <a href="">Life</a>
                </li>
                <li className="pb-5">
                  <a href="">Tips and Tricks</a>
                </li>
              </ul>
            </section>
            <section>
              <h4 className="pb-5 text-orange-500">ABOUT</h4>
              <ul>
                <li className="pb-5">
                  <a href="">Team</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
