// NavBar.tsx
import { FunctionalComponent } from 'preact';

const NavBar: FunctionalComponent = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-col items-center py-4 space-y-2 z-10">
      <a href="/" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
        Yellow Flower
      </a>

      <div className="flex space-x-4 z-10">
        {[
          ['Reiki', '/reiki'],
          ['Vintage', '/vintage'],
          ['Film', '/film'],
          ['About', '/about'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
