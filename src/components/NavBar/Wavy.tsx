// Wavy.tsx
import {useEffect, useRef} from "preact/hooks"
import { FunctionalComponent } from "preact";
import { makeNoise2D } from 'open-simplex-noise';

const Wavy: FunctionalComponent = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const noise2D = makeNoise2D(Date.now());
    const path = svg.querySelector('path');
    if (!path) return;

    const update = () => {
      let d = "";
      for (let x = 0; x < 500; x++) {
        const y = 200 + noise2D(x * 0.01, Date.now() * 0.0001) * 25;  // Adjust amplitude here
        d += (x === 0 ? "M" : " L") + `${x},${y}`;
      }
      d += " L500,300 L0,300";  // Update line here
      path.setAttribute("d", d);
      requestAnimationFrame(update);
    };
    update();
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 300" // Update viewBox here
      height="520" // Increase height here
      width="100%"
      preserveAspectRatio="none"
      style={{fill: '#d47a20', transform: 'scale(-1)'}}
      className="z-0"
    >
      {/* there doesn't even need to be any path points here, because the noise will draw it */}
      <path />
      
      {/* <path d="M0,200 C83,265 3,170 166,200 C290,250 249,150 332,200 C415,250 415,160 550,200 L500,0 L0,0 Z"/> */}
    </svg>
  );
};

export default Wavy;
