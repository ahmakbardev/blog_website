import React from "react";
import { Link } from "react-router-dom";

const TempSidebar = () => {
  return (
    <div className="w-32 bg-white shadow-lg fixed right-3 top-24 p-3 rounded-md border z-20">
      <h1 className="text-xs mb-3">Just a temp sidebar for make navigation easer</h1>
      <div className="grid grid-cols-2 gap-1">
        <Link
          to={"/"}
          className="flex-1 flex justify-center items-center text-xs aspect-square hover:bg-slate-800 hover:text-white transition-all ease-in-out border text-center"
        >
          Home
        </Link>
        <Link
          to={"/detail"}
          className="flex-1 flex justify-center items-center text-xs aspect-square hover:bg-slate-800 hover:text-white transition-all ease-in-out border text-center"
        >
          Detail Blog
        </Link>
        <Link
          to={"/create-blog"}
          className="flex-1 flex justify-center items-center text-xs aspect-square hover:bg-slate-800 hover:text-white transition-all ease-in-out border text-center"
        >
          Create Blog
        </Link>
        <Link
          to={"/login"}
          className="flex-1 flex justify-center items-center text-xs aspect-square hover:bg-slate-800 hover:text-white transition-all ease-in-out border text-center"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default TempSidebar;
