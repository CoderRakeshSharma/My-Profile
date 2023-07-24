import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navBarArr } from "./data";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-100 from-10% via-emerald-300 via-30% to-emerald-100 to-90%">
      <div className="items-center justify-between hidden py-4 main-container lg:flex">
        <div>
          <h1 className="">Rakesh Sharma</h1>
        </div>
        <div className="flex items-center justify-end gap-10">
          <div className="flex items-center gap-10">
            {navBarArr.map((_) => (
              <div key={_.key}>
                <Link href={_.path}>
                  <div>{_.title}</div>
                </Link>
              </div>
            ))}
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-emerald-300 from-10% via-emerald-100 via-30% to-emerald-400 to-90% rounded-xl text-emerald-600 font-bold cursor-pointer hover:text-emerald-900 hover:font-bold">
            My CV
          </button>
        </div>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;
