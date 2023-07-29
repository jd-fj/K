// import { FunctionalComponent } from "preact";
// import { useState } from "preact/hooks";
// import MountainNav from "./MountainNav";
// import HomeFlower from "./HomeFlower";
// import { Link } from "preact-router/match";
// import HamburgerIcon from "./Hamburger";
// import Ex from "./Ex";

// const navLinks = [
//   ["Reiki", "/K/reiki"],
//   ["Sessions", "/K/sessions"],
//   ["About", "/K/about"],
//   ["Palette", "/K/palette"],
// ];

// const JavBar: FunctionalComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="relative">
//       <div className="absolute inset-0 flex items-center mt-[5%]">
//         <MountainNav />
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
//           <HomeFlower />
//         </div>
//       </div>
//       <Link
//         id="homeLink"
//         href="/K/"
//         className=""
//       >
//         Yellow Flower Healing
//       </Link>

//       <div
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer md:hidden"
//         onClick={toggleMenu}
//       >
//         {isOpen ? <Ex /> : <HamburgerIcon />}
//       </div>

//       {/* isMobile view*/}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 mr-2 flex flex-col md:hidden">
//           {navLinks.map(([title, url]) => (
//             <Link key={title} href={url} className="mt-2" onClick={toggleMenu}>
//               {title}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* isNotMobile view*/}
//       <div className="hidden md:flex md:absolute md:right-0 md:mt-2 md:mr-2">
//         {navLinks.map(([title, url]) => (
//           <Link key={title} href={url} className="ml-4">
//             {title}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default JavBar;
