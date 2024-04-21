import React from "react";
import FormInfo from "./FormInfo";

const Footer = () => {
  return (
    <>
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
