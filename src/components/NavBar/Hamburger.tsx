// HamburgerIcon.tsx
import { FunctionalComponent } from 'preact';

const HamburgerIcon: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-20 w-20"
      // strokeWidth='5px'
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth='5px'
        stroke-width={2.5}
        // style={{ strokeWidth: '3px', strokeLinecap: "round", strokeLinejoin: "round" }} // Inline style
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default HamburgerIcon;
