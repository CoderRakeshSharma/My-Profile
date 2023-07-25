import Link from "next/link";
import Typewriter from "typewriter-effect";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navBarArr } from "./data";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-100 from-10% via-emerald-300 via-30% to-emerald-100 to-90%">
      <div className="items-center justify-between hidden py-4 px-4 main-container lg:flex">
        <div>
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
        <div className="flex items-center justify-end gap-10">
          <div className="flex items-center gap-10 text-emerald-600 font-bold">
            {navBarArr.map((_) => (
              <div key={_.key}>
                <Link href={_.path}>
                  <div className="cursor-pointer hover:text-emerald-900 hover:font-semibold">
                    {_.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-emerald-300 from-10% via-emerald-100 via-30% to-emerald-400 to-90% rounded-xl text-emerald-600 font-bold cursor-pointer hover:text-emerald-900 hover:font-semibold">
            My CV
          </button>
        </div>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;
