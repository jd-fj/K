// Ex.tsx
import { FunctionalComponent } from 'preact';

const Ex: FunctionalComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-20 w-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width={1.5}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Ex;
