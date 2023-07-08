import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import Wavy from "./Wavy";
import { Link } from "preact-router/match";
import HamburgerIcon from "./Hamburger";
import Ex from "./Ex";

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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <Ex /> : <HamburgerIcon />}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 mr-2 flex flex-col lg:hidden">
          {[
            ["Reiki", "/K/reiki"],
            ["Sessions", "/K/sessions"],
            ["About", "/K/about"],
            ["Palette", "/K/palette"],
          ].map(([title, url]) => (
            <Link key={title} href={url} className="mt-2">
              {title}
            </Link>
          ))}
        </div>
      )}

      <div className="hidden lg:flex lg:absolute lg:right-0 lg:mt-2 lg:mr-2">
        {[
          ["Reiki", "/K/reiki"],
          ["Sessions", "/K/sessions"],
          ["About", "/K/about"],
          ["Palette", "/K/palette"],
        ].map(([title, url]) => (
          <Link key={title} href={url} className="ml-4">
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default JavBar;
