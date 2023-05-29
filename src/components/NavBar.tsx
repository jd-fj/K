// NavBar.tsx
import { FunctionalComponent } from 'preact';

const NavBar: FunctionalComponent = () => {
  return (
      <nav className="fixed top-0 left-0 right-0">
      {[
        ['Home', '/'], // yellow flower
        ['About', '/about'],
        ['Film', '/film'], // PHOTOgraphy
        ['Reiki', '/reiki'],
        ['Vintage', '/vintage'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
  );
}

export default NavBar;
