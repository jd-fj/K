// Wavy.tsx
import { FunctionalComponent } from "preact";

const Wavy: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 80"
      preserveAspectRatio="none"
      fill="#d47a20"
      height="8em"
      width="100%"
    >
      <path d="M0 49C36.283 49 69.3007 60.0436 95.1067 53.279C115.066 48.047 137.554 41.0962 157.295 47.0957C209.328 62.9085 235.255 34.6363 253.5 24.5C278.223 10.7652 279.889 80.0345 322.986 13.5107C330.593 1.76863 346.055 -2.69556 358.318 4.03886C492.78 77.8785 500 49 500 49V131H0V49Z" />
    </svg>
  );
};

export default Wavy;
