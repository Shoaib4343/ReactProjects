import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen w-full ">
      <div className="bg-red-500 mx-auto mt-20 max-w-7xl rounded-md h-96 p-10 flex flex-col  items-center justify-center">
        <h1 className="text-7xl text-white font-bold text-center">Error {error.status}</h1>
        <p className="text-2xl text-white font-semibold text-center" >page {error.statusText}</p>
        <p className="text-2xl text-white font-semibold text-center my-4" >{error.data}</p>
        <NavLink to="/">

        <button  className="bg-gray-600 text-white px-4 py-2 rounded-md  ">Go Back Home </button>
        </NavLink>
        <div >

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
