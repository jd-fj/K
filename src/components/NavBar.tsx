// NavBar.tsx
import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

const NavBar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-5 flex flex-col items-center py-4 space-y-2 z-10">
      <a href="/" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-yellow-100 hover:text-slate-900">
        Yellow Flower
      </a>
      <div className="relative">
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
          <div className="absolute top-full flex flex-col space-y-2">
            {[
              ['Reiki', '/reiki'],
              ['Vintage', '/vintage'],
              ['Film', '/film'],
              ['About', '/about'],
            ].map(([title, url]) => (
              <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-yellow-100 hover:text-slate-900">
                {title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
