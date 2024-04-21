import React from "react";

const FormInfo = () => {
  return (
    <div>
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
    </div>
  );
};

export default FormInfo;
