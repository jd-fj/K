import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";

const navLinks = [
  ["Reiki", "/reiki"],
  ["Sessions", "/sessions"],
  ["About", "/about"],
  ["Palette", "/palette"],
];

const NavBar: FunctionalComponent = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="flex justify-between mb-4">
        <div className="h-12 w-12 bg-gray-200">place holder left</div>
        <Link id="homeLink" href="/">
          <h2>Yellow Flower</h2>
          <h2>Holistic Healing</h2>
        </Link>
        <div className="h-12 w-12 bg-gray-200">place holder right</div>
      </div>

      <nav id="NavBar" className="flex justify-between mb-4">
        {" "}
        {/* added margin-bottom for spacing */}
        {navLinks.map(([title, url]) => (
          <Link key={title} className="flex-1 text-center" href={url}>
            <span className="">{title}</span>
          </Link>
        ))}
      </nav>

      {/* Footer image */}
      <div className="h-24 w-full bg-gray-300">Footer Image Placeholder</div>
    </div>
  );
};

export default NavBar;
