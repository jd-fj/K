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

      <Link id="homeLink" className="" href="/K/">
        <div className="absolute top-0 left-0 flex items-center">
          <div className="flex items-center w-10v h-10v sm:w-8v sm:h-8v xl:w-11v xl:h-11v">
            <HomeFlower />
          </div>
          Yellow Flower Healing
        </div>
      </Link>

      {/* <div className="absolute right-0 bottom-0 top-[100%] flex w-full sm:w-1/2 justify-around rounded p-3 mx-10 h-5 w-5 bg-[#000]
      text-[#3e3409] text-xl sm:text-sm sm:mt-1 
      "> */}
      <div
        className="absolute right-0 bottom-0 top-[90%] flex w-full sm:w-1/2 justify-around 
      "
      >
        {navLinks.map(([title, url]) => (
          <Link key={title} className="" href={url}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default JavBar;
