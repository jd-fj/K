// Wavy.tsx
import { FunctionalComponent } from "preact";

const Wavy: FunctionalComponent = () => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 150"
  preserveAspectRatio="none"
  style={{fill: '#d47a20'}}
  height="100%"
  width="100%"
>
  <path d="M0,40 C83,-15 93,80 166,40 C290,0 249,100 332,50 C415,0 415,90 550,40 L500,150 L0,150 Z"></path>
</svg>


  );
};

export default Wavy;
