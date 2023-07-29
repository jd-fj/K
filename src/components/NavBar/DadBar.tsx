// JavBar.tsx
import { FunctionalComponent } from "preact";
import MountainNav from "./MountainNav";
import HomeFlower from "./HomeFlower";
import { Link } from "preact-router/match";

const navLinks = [
  ["Reiki", "/K/reiki"],
  ["Sessions", "/K/sessions"],
  ["About", "/K/about"],
  ["Palette", "/K/palette"],
];

const JavBar: FunctionalComponent = () => {
  return (
    <nav className="relative">

        <div className="">
          <MountainNav />
        </div>

        <div className="absolute top-0 left-0 flex items-center">
          <div className="flex items-center w-10v h-10v">
            <HomeFlower />
          </div>
          <Link id="homeLink" className="ml-2" href="/K/">
            Yellow Flower Healing
          </Link>
        </div>

        <div className="absolute right-0 bottom-0 flex">
          {navLinks.map(([title, url]) => (
            <Link key={title} className="ml-2" href={url}>
              {title}
            </Link>
          ))}
        </div>

    </nav>
  );
};

export default JavBar;
