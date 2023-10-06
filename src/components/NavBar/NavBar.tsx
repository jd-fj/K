import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import butterfly from "../../assets/butterfly.png";
import flowers from "../../assets/flowers.png";

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
      {/* Top Horizontal Line */}
      <div className="flex items-center justify-between ">
  <div className="w-28 h-auto md:w-36 mt-2 ">
    <img src={butterfly} class="ml-1" alt="butterfly" />
  </div>

  <Link id="homeLink" href="/" className=""> {/* Adjust the mt-4 value as needed */}
    <div className="sm:hidden">
      <h2 className="text-orange-300 text-[2em] text-center">YELLOW FLOWER</h2>
      <h2 className="text-orange-300 text-[2em] text-center">HOLISTIC HEALING CENTER</h2>
    </div>
    <div className="hidden sm:block">
      <h2 className="text-orange-300 text-[2em] text-center">
        YELLOW FLOWER HOLISTIC HEALING CENTER
      </h2>
    </div>
  </Link>

  <div className="w-28 h-auto md:w-36 mt-2 mr-2">
    <img src={flowers} alt="flowers" className=''/>
  </div>
</div>



      {/* Middle Horizontal Line */}
      <nav id="NavLinks" className="flex justify-between mb-4">
        {navLinks.map(([title, url]) => (
          <Link
            key={title}
            className="flex-1 text-center text-green-200 hover:text-green-100 hover:bg-green-200 rounded-lg responsive-text"
            href={url}
          >
            {title}
          </Link>
        ))}
      </nav>

      {/* Bottom Horizontal Line */}
      <div className="w-full">
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
