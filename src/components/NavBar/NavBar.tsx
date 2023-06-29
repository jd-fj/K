// NavBar.tsx
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
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 z-20 text-3xl relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Wavy />
      </div>
      <Link
        onClick={handleLinkClick}
        href="/K/"
        className="rounded-lg ml-5 px-3 py-2 text-[#d4aa20] font-semibold hover:bg- hover:text-amber-400 text-6xl z-20"
      >
        yellow flower healing
      </Link>

      <div className="relative mr-12 z-20">
        <button
          onClick={toggleMenu}
          className="block rounded-lg px-3 py-2 text-[#d4aa20] font-medium hover:bg- hover:text-amber-400"
        >
          {isOpen ? <Ex /> : <HamburgerIcon />}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 flex flex-col items-end space-y-2 mr-5">
            {[
              ["Reiki", "/K/reiki"],
              ["Sessions", "/K/sessions"],
              ["About", "/K/about"],
            ].map(([title, url]) => (
              <Link
                onClick={handleLinkClick}
                key={title}
                href={url}
                className="rounded-lg px-3 py-2 text-[#d4aa20] font-medium hover:bg-[#85a138] hover:text-amber-400"
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
