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
        const y = 100 + noise2D(x * 0.01, Date.now() * 0.0001) * 50;
        d += (x === 0 ? "M" : " L") + `${x},${y}`;
      }
      d += " L500,150 L0,150";
      path.setAttribute("d", d);
      requestAnimationFrame(update);
    };
    update();
  }, []);

  return (
    <svg
      ref={svgRef}
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
