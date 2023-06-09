import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import Wavy from "./Wavy";
import { Link } from "preact-router/match";
import HamburgerIcon from "./Hamburger";
import Ex from "./Ex";

const navLinks = [
  ["Reiki", "/K/reiki"],
  ["Sessions", "/K/sessions"],
  ["About", "/K/about"],
  ["Palette", "/K/palette"],
];

const JavBar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <Wavy />

      <Link
        id="homeLink"
        href="/K/"
        className="absolute left-0 bottom-0 mb-2 ml-2"
      >
        JavBar Component
      </Link>

      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <Ex /> : <HamburgerIcon />}
      </div>

      {/* isMobile view*/}
      {isOpen && (
        <div className="absolute right-0 mt-2 mr-2 flex flex-col md:hidden">
          {navLinks.map(([title, url]) => (
            <Link key={title} href={url} className="mt-2" onClick={toggleMenu}>
              {title}
            </Link>
          ))}
        </div>
      )}

      {/* isNotMobile view*/}
      <div className="hidden md:flex md:absolute md:right-0 md:mt-2 md:mr-2">
        {navLinks.map(([title, url]) => (
          <Link key={title} href={url} className="ml-4">
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default JavBar;
