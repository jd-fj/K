import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import Full from "../../assets/Full";
import "./NavBar.css";

const navLinks = [
  ["Reiki", "/reiki"],
  ["Sessions", "/sessions"],
  ["About", "/about"],
  ["Palette", "/palette"],
];

const NavBar: FunctionalComponent = () => {
  return (
    <>
      <Link href="/" id="HomeLink" className="flex mx-2 text-center xl:mx-[400px] lg:mx-[200px] md:mx-[100px] mx-auto -mb-5">
        <Full />
      </Link>

{/* Navigation Links */}
<div
    id="NavLinks"
    className="flex h-[50px] justify-center md:space-x-[5em] sm:mb-1 -mb-1 w-full items-center " // added h-[50px] and items-center
>
    {navLinks.map(([title, url]) => (
        <Link
            key={title}
            className="flex items-center justify-center link-hover responsive-text flex-grow md:flex-grow-0 min-w-0 hover:bg-green-100 rounded-lg px-2 "
            href={url}
        >
            <div className="text-green-200 truncate text-center -mt-1">
                {title}
            </div>
        </Link>
    ))}

      </div>
      {/* Bottom Horizontal Row */}
      <div className="w-full ">
        <div className="w-full h-1 bg-brown-200"></div>
        <div className="w-full mt-1 h-1 bg-yellow-300"></div>
      </div>
    </>
  );
};

export default NavBar;
