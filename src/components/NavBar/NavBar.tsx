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
      <Link
        href="/"
        id="HomeLink"
        className="flex mx-2 text-center"
      >
        <Full />
      </Link>

      {/* Navigation Links */}
      <div id="NavLinks" className="flex justify-center mb-1 w-full">
        {navLinks.map(([title, url]) => (
          <Link
            key={title}
            className="flex link-hover justify-center text-center responsive-text flex-grow md:flex-grow-0 min-w-0"
            href={url}
          >
            <div className="flex-shrink m-2 text-green-200 rounded-lg truncate text-center">
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
