import React from "react";
import Layout from "../../layouts/Layout";

const Create = () => {
  return (
    <Layout>
       <main> 
            <section>
                <h1 className="mt-20 mb-10 text-4xl text-center font-bold text-gray-700">Create your blog here!</h1>
            </section>
            <div className="flex flex-wrap gap-4 justify-center">
                <section className="px-4 py-4 basis-1/6">
                    <h3 className="text-xl font-bold">Your Title Here!</h3>
                    <input type="text" placeholder="input Description" className="bg-gray-100 px-2 py-2 font-normal rounded-lg border border-gray-300 w-72"/>
                </section>
                <section className="px-4 lg:basis-4/6 md:basis-5/6 sm:basis-auto">
                    <h2 className="mb-2 text-3xl font-bold">Your Article Here!</h2>
                    <div className="border rounded-lg">
                        <div className="m-3">
                            <p className="text-sm font-normal py-1">Description</p>
                            <textarea placeholder="Start Typing here ..." id="" cols="30" rows="10" className="bg-gray-100 text-sm rounded-lg h-96 min-w-full"></textarea>
                            <button className="bg-red-600 text-white mt-2 p-1 rounded-lg w-full">Post Your Article</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </Layout>
  );
};

export default Create;
