// NavBar.tsx
import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import HamburgerIcon from "./Hamburger";
import Ex from "./Ex";

const NavBar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 z-10 text-3xl">
        <Link
          onClick={handleLinkClick}
          href="/K/"
          className="rounded-lg ml-5 px-3 py-2 text-[#d4aa20] font-semibold hover:bg- hover:text-amber-400 text-6xl"
        >
yellow flower healing
        </Link>

        <div className="relative mr-12">
          <button
            onClick={toggleMenu}
            className="block rounded-lg px-3 py-2 text-[#d4aa20] font-medium  hover:bg- hover:text-amber-400"
          >
            {isOpen ? <Ex /> : <HamburgerIcon />}
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 flex flex-col items-end space-y-2 mr-5">
              {[
                ["Reiki", "/K/reiki"],
                ["Vintage", "/K/vintage"],
                ["Film", "/K/film"],
                ["About", "/K/about"],
                ["Palette", "/K/palette"],
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
    </>
  );
};

export default NavBar;
