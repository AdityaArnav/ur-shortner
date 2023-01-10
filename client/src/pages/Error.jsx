import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[60vh] w-full flex justify-center items-center">
        <div className="text-center">
          <p className="font-extrabold text-xl">404 Error</p>
          <h1 className="text-6xl font-bold">Page not found.</h1>
          <p className="mt-4 text-gray-500 text-xl">
            Sorry, we couldn't find the page you are looking for.
          </p>
          <button
            className="inline-flex mt-6 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => navigate("/")}
          >
            Go back home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
