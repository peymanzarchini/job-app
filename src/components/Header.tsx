import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="container flex items-center justify-between my-4">
      {/* <div> */}
      <Link href={"/"} className="font-bold text-xl">
        Job Board
      </Link>
      <nav className="hidden *:py-2 *:px-4 *:rounded-md sm:flex sm:gap-2">
        <Link href={"/login"} className="bg-gray-200">
          Login
        </Link>
        <Link href={"/register"} className="bg-gray-200">
          Register
        </Link>
        <Link href={"new-listing"} className="bg-blue-600 text-white">
          Post a job
        </Link>
      </nav>
      <div className="h-10 bg-slate-300 rounded-full w-10 flex items-center justify-center sm:hidden">
        <GiHamburgerMenu size={25} />
      </div>

      {/* </div> */}
    </header>
  );
};

export default Header;
