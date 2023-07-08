import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Wavy from './Wavy';
import { Link } from 'preact-router/match';
import HamburgerIcon from './Hamburger';
import Ex from './Ex';

const JavBar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <Wavy />

      <Link id="homeLink" href="/K/" className="absolute left-0 bottom-0 mb-2 ml-2">
        JavBar Component
      </Link>

      <div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer" 
        onClick={handleClick}
      >
        {isOpen ? <Ex /> : <HamburgerIcon />}
      </div>
    </nav>
  );
};

export default JavBar;
