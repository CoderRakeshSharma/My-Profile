import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-300 from-10% via-emerald-200 via-30% to-emerald-100 to-90%">
      <div className="flex flex-col md:flex-row">
        <div className="w-full mt-20 mb-20 md:ml-24 md:w-1/2 order-2 md:order-1">
          <div className="text-center md:text-left cursor-pointer">
            <h2 className="text-4xl font-bold mb-4 hover:text-6xl">
              THE
              <span className="text-emerald-800 font-extrabold hover:text-emerald-950"> CODER</span>
            </h2>
            <h2 className="text-5xl font-bold mb-4 hover:text-7xl">
              THE
              <span className="text-emerald-800 font-extrabold hover:text-emerald-950"> PROGRAMMER</span>
            </h2>
            <h2 className="text-6xl font-bold mb-4 hover:text-8xl">
              THE
              <span className="text-emerald-800 font-extrabold hover:text-emerald-950"> DEVELOPER</span>
            </h2>
          </div>
        </div>
        <div className="w-full mt-20 mb-20 md:w-1/2 order-1 md:order-2">
          <img src="intro.png" alt="Image" className="w-auto transition-transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
