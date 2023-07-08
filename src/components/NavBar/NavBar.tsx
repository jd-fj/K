import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import HamburgerIcon from "./Hamburger";
import Ex from "./Ex";
import Wavy from "./Wavy";

const NavBar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="relative h-20">
      <div id="wavyDiv" className="h-20">
        <Wavy />
      </div>
      <div className="absolute bottom-0 flex justify-between w-full px-4 md:px-0">
        <Link
          onClick={handleLinkClick}
          href="/K/"
          className=""
        >
          yellow flower healing
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="">
            {isOpen ? <Ex /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:justify-between`}
      >
        {[
          ["Reiki", "/K/reiki"],
          ["Sessions", "/K/sessions"],
          ["About", "/K/about"],
          ["Palette", "/K/palette"],
        ].map(([title, url]) => (
          <Link
            onClick={handleLinkClick}
            key={title}
            href={url}
            className=""
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
