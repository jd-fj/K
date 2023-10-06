import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import butterfly from "../../assets/butterfly.png";
import flowers from "../../assets/flowers.png";
import './NavBar.css'

const navLinks = [
  ["Reiki", "/reiki"],
  ["Sessions", "/sessions"],
  ["About", "/about"],
  ["Palette", "/palette"],
];

const NavBar: FunctionalComponent = () => {
  return (
    // Big Papa Parent Div
    <div className="flex flex-col items-stretch">
      {/* Top Horizontal Row */}
      <div className="flex items-center justify-between ">
        <div className="w-28 h-auto md:w-36 mt-2 ">
          <img src={butterfly} class="ml-1" alt="butterfly" />
        </div>

        <Link id="homeLink" href="/" className="">
          {" "}
          {/* Adjust the mt-4 value as needed */}
          <div className="sm:hidden">
            <h2 className="text-orange-300 text-[2em] text-center">
              YELLOW FLOWER
            </h2>
            <h2 className="text-orange-300 text-[2em] text-center">
              HOLISTIC HEALING CENTER
            </h2>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-orange-300 text-[2em] text-center">
              YELLOW FLOWER HOLISTIC HEALING CENTER
            </h2>
          </div>
        </Link>

        <div className="w-28 h-auto md:w-36 mt-2 mr-2">
          <img src={flowers} alt="flowers" className="" />
        </div>
      </div>

{/* Middle Horizontal Row */}
<nav id="NavLinks" className="flex justify-between sm:justify-center mb-6 space-x-0 sm:space-x-6 md:space-x-12 lg:space-x-24">

    {navLinks.map(([title, url]) => (
        <Link
            key={title}
            className="link-hover flex-1 text-center responsive-text sm:flex-none"
            href={url}
        >
            <div className="link-child inline-block px-2 py-1 text-green-200 rounded-lg">
                {title}
            </div>
        </Link>
    ))}
</nav>

      {/* Bottom Horizontal Row */}
      <div className="w-full -mt-4">
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
