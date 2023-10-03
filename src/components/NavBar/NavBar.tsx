import { FunctionalComponent } from "preact";
import { Link } from "preact-router/match";
import "./NavBar.css";

const navLinks = [
  ["Reiki", "/reiki"],
  ["Sessions", "/sessions"],
  ["About", "/about"],
  ["Palette", "/palette"],
];

const NavBar: FunctionalComponent = () => {
  return (
    <nav id="NavBar" className="flex justify-between">
      {navLinks.map(([title, url]) => (
        <Link key={title} className="flex-1 text-center" href={url}>
          <span className="">{title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
