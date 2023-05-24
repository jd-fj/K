// NavBar.tsx
import { Link } from 'preact-router/match';
import { FunctionalComponent } from 'preact';

const NavBar: FunctionalComponent = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <Link activeClassName="active" href="/">Home</Link>
      <Link activeClassName="active" href="/about">About</Link>
    </nav>
  );
}

export default NavBar;
