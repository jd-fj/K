import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import butterfly from "../../assets/butterfly.png";
import flowers from "../../assets/flowers.png";
import "./NavBar.css";

const navLinks = [
  ["Reiki", "/reiki"],
  ["Sessions", "/sessions"],
  ["About", "/about"],
  ["Palette", "/palette"],
];

const NavBar: FunctionalComponent = () => {
  return (
    <div className="flex flex-col items-stretch lg:-mt-3">
      {/* Top Horizontal Row */}
      <div className="flex items-center justify-between lg:justify-center">
        <div className="w-28 h-auto md:w-36 mt-2 lg:hidden">
          <img src={butterfly} alt="butterfly" />
        </div>

        <Link id="homeLink" href="/" className="self-center ">
          <div className="sm:hidden">
            <h2 className="text-orange-300 text-[3em] text-center">
              YELLOW FLOWER
            </h2>
            <h2 className="text-orange-300 text-[3em] text-center">
              HOLISTIC HEALING CENTER
            </h2>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-orange-300 text-[3em] text-center lg:mt-14 -mb-12">
              YELLOW FLOWER HOLISTIC HEALING CENTER
            </h2>
          </div>
        </Link>

        <div className="w-28 h-auto md:w-36 mt-2 mr-2 lg:hidden">
          <img src={flowers} alt="flowers" className="" />
        </div>
      </div>

      {/* Middle Horizontal Row */}
      <nav
        id="NavLinks"
        className="flex justify-center mb-[.75em] items-center w-full"
      >
        <div className="flex w-full sm:justify-between justify-center items-center">
          {/* Butterfly image */}
          <div className="hidden lg:block w-28 h-auto md:w-[9.75em] lg:-mt-[2em]">
            <img src={butterfly} alt="butterfly" className="lg:ml-6" />
          </div>

          {/* Navigation Links */}
          <div className="flex w-full justify-center sm:space-x-12 md:space-x-32 lg:space-x-38 lg:pt-14 text-[1.2em]">
            {navLinks.map(([title, url]) => (
              <Link
                key={title}
                className="link-hover text-center responsive-text"
                href={url}
              >
                <div className="link-child inline-block px-2 text-green-200 rounded-lg">
                  {title}
                </div>
              </Link>
            ))}
          </div>

          {/* Flowers image */}
          <div className="hidden lg:block w-28 h-auto md:w-[11em] mt-2 mr-2 lg:mr-6 lg:-mt-[2em]">
            <img src={flowers} alt="flowers" className="" />
          </div>
        </div>
      </nav>

      {/* Bottom Horizontal Row */}
      <div className="w-full -mt-4 px-6">
        <div
          className="w-full"
          style={{ height: "3px", backgroundColor: "#997744" }}
        ></div>
        <div
          className="w-full mt-1"
          style={{ height: "3px", backgroundColor: "#d4ab29" }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
