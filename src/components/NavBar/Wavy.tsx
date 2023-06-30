// Wavy.tsx
import { FunctionalComponent } from "preact";

const Wavy: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      height="170"
      width="100%"
      preserveAspectRatio="none"
      style={{fill: '#d47a20'}}
      className="z-0"
    >
      <path d="M0,110 C83,165 93,70 166,110 C290,150 249,50 332,100 C415,150 415,60 550,110 L500,0 L0,0 Z"></path>
    </svg>
  );
};

export default Wavy;
