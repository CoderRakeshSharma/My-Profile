import React from "react";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-400 from-10% via-emerald-50 via-50% to-emerald-400 to-90% flex justify-between items-center w-full flex-col">
      <div className="container py-8 mx-auto">
        <div className="items-center justify-center w-full text-center">
          <h1 className="text-5xl text-emerald-800 font-extrabold hover:text-emerald-950">
            <Typewriter
              options={{
                strings: ["RAKESH SHARMA"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
      <div className="w-full py-2 text-lg border-t border-slate-600 bg-gradient-to-r from-emerald-100 from-10% via-emerald-300 via-30% to-emerald-100 to-90%">
        <div className="items-center justify-center w-full text-center text-2xl text-emerald-800 font-semibold hover:text-emerald-950 hover:font-extrabold cursor-pointer">
          <Typewriter
            options={{
              strings: ["THE OWNER", "DESIGNER & CREATOR"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
