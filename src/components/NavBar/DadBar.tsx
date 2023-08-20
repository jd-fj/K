  // JavBar.tsx
  import { FunctionalComponent } from "preact";
  import MountainNav from "./MountainNav";
  import HomeFlower from "./HomeFlower";
  import { Link } from "preact-router/match";

  const navLinks = [
    ["Reiki", "/reiki"],
    ["Sessions", "/sessions"],
    ["About", "/about"],
    ["Palette", "/palette"],
  ];

  const JavBar: FunctionalComponent = () => {
    return (
      <>
        <nav className="relative top-10 md:top-0">
          <div className="">
            <MountainNav />
          </div>

          <Link id="homeLink" href="/">
            <div className="absolute md:top-0 -top-10 left-0 flex items-center">
              <div className="flex items-center w-15v h-15v sm:w-10v sm:h-10v xl:w-11v xl:h-11v">
                <HomeFlower />
              </div>
              <div id="yfh" className="text-[1em] sm:text-[3em] -ml-1 sm:ml-0 mb-0">
                Yellow Flower Energy
                {/* yellow flower healing */}
              </div>
            </div>
          </Link>

          {/* <div className="absolute right-0 bottom-0 top-[100%] flex w-full sm:w-1/2 justify-around rounded p-3 mx-10 h-5 w-5 bg-[#000]
        text-[#3e3409] text-xl sm:text-sm sm:mt-1 
        "> */}
          <div
            id="linkies"
            className="absolute right-0 top-[80%] flex w-full sm:w-1/2 justify-around text-[150%]"
          >
            {navLinks.map(([title, url]) => (
              <Link key={title} className="" href={url}>
                <span className="rounded px-2 sm:px-5 hover:text-[#5d712b] text-[#85a138] hover:bg-[#85a138]">
                  {title}
                </span>
              </Link>
            ))}
          </div>

          <div className="absolute  top-[80%] flex flex-col w-screen mt-10">
            <div id="line1" className="line1"></div>
            <div id="line2" className="mt-1 line2"></div>
          </div>
        </nav>
      </>
    );
  };

  export default JavBar;
