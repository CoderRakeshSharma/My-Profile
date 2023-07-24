import { useState } from "react";
import { navBarArr } from "./data";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const ResponsiveNavbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className="w-full relative flex-col flex lg:hidden py-3 z-[200]">
      {/* logo and toggle button */}
      <div className="flex items-center justify-between w-full main-container">
        <div className="z-[100]">
          <h1 className="">Rakesh Sharma</h1>
        </div>
        <button className="z-[100]" onClick={() => setToggleOpen(!toggleOpen)}>
          {toggleOpen ? (
            <AiOutlineClose className="!text-xl" />
          ) : (
            <GiHamburgerMenu className="!text-xl" />
          )}
        </button>
      </div>

      {/* option section */}
      <div
        className={` absolute w-full top-20 h-fit shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-gradient-to-r from-pink-100 from-10% via-emerald-300 via-30% to-yellow-100 to-90% z-[20] common-transition ${
          toggleOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-[200%] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 py-4 main-container">
          <div className="flex flex-col gap-2">
            {navBarArr.map((_) => (
              <div key={_.key}>
                <Link href={_.path}>
                  <div>{_.title}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="">
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-400 from-10% via-emerald-300 via-30% to-emerald-400 to-90% rounded-xl text-emerald-600 font-bold cursor-pointer hover:text-emerald-900 hover:font-bold !w-fit">
              My CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
