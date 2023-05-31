// NavBar.tsx
import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

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
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 z-10">
      <Link onClick={handleLinkClick} href="/" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-yellow-100 hover:text-slate-900 ml-5">
        Yellow Flower
      </Link>
      <div className="relative mr-5">
        <button onClick={toggleMenu} className="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 flex flex-col items-end space-y-2">
            {[
              ['Reiki', '/reiki'],
              ['Vintage', '/vintage'],
              ['Film', '/film'],
              ['About', '/about'],
            ].map(([title, url]) => (
              <Link onClick={handleLinkClick} key={title} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-yellow-100 hover:text-slate-900">
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
