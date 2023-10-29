// SwirlyHand.tsx
import { useEffect, useRef } from "preact/hooks";

const SwirlyHand = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length} ${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      pathRef.current.getBoundingClientRect(); 
      // Adding ease-in-out to the transition
      pathRef.current.style.transition = 'stroke-dashoffset 6s ease-in-out';
      pathRef.current.style.strokeDashoffset = `${length / 2.061}`;
    }

    if (pathRef2.current) {
      const length = pathRef2.current.getTotalLength();
      pathRef2.current.style.strokeDasharray = `${length} ${length}`;
      pathRef2.current.style.strokeDashoffset = `-${length}`;
      pathRef2.current.getBoundingClientRect();
      // Adding ease-in-out to the transition
      pathRef2.current.style.transition = "stroke-dashoffset 6s ease-in-out";
      pathRef2.current.style.strokeDashoffset = `-${length / 1.943}`;
    }
  });

  return (
    <svg
      class="swirly-hand-animation"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 296 470"
      overflow="visible"
    >
      <path
        ref={pathRef}
        class="forward"
        style={{
          fill: "none",
          stroke: "#d4ab29",
          // stroke: "#997744",
          strokeWidth: 2.5,
        }}
        d="m158.37,361.49c-1.61-1.62,6.76-11.85,18.82-8.89,11.42,2.8,16.69,15.28,14.1,25.98-4.69,19.32-21.44,31.04-41.75,29.19-16.32-1.48-32.15-18.62-31.7-36.65.68-27.18,19.37-51.11,49.47-52.56,25.3-1.22,46.63,14.85,52.71,34.61,11.2,36.34-11.98,75.94-49.28,84.18-23.47,5.19-44.07.3-61.09-15.24-12.91-11.79-20.61-27.42-21.67-45.9-1.51-26.28,5.96-48.83,25.29-66.91,13.12-12.27,29.15-18.34,46.9-19.9,22.25-1.95,43.21,1.55,61.28,15.79,4.74,3.73,9.03,8.03,13.51,12.08,2,1.81,3.94,4.2,5.91,7.03,3.01,4.33,5.06,9.82,7.5,15.83,6.38,15.74,6.81,31.87,4.32,48.44-5.64,37.53-30.19,58.53-63.91,70.37-10.08,3.54-17.99,5.94-30.18,6.02-43.46.3-83.58-22.81-101.72-64.63-9.83-22.65-15.77-46.53-19.59-71.21-5.1-32.95-12.62-65.56-26.78-96.16-3.36-7.27-7.32-14.41-9.51-22.04-1.34-4.65-1.66-11.68.96-14.78,2.49-2.95,9.68-3.71,14.29-2.81,22.32,4.39,32.37,22.41,41.3,40.44,6.52,13.16,11.25,25.92,15.34,41.33,2.54,9.57,5.13,30.1,11.99,31.72,7.32-.03,9.93-16.6,10.77-25.72,2.2-23.98,2.88-48.14,3.02-72.24.31-52.81-.18-105.63-.07-158.45.01-5.23,1.29-10.67,3.06-15.62,2.55-7.14,7.95-10.81,15.92-11.05,8.54-.27,14.07,4.53,17.35,11.04,2.7,5.37,3.9,16.1,4.49,40.77.98,50.79.97,78.86,1.99,129.65.19,9.36,3.93,27.75,8.71,27.43,3.46,0,4.52-9.79,4.64-14.47.52-20.89.75-41.8.56-62.7-.25-28.08-1.18-128.44.58-141.72C157.25,3.64,163.4.12,171.81,0c10.81-.15,15.52,9.95,18.01,15.12,3.25,6.75,4.29,15.05,4.43,22.72,1.16,61.88,1.88,123.77,2.74,185.65.03,1.85,0,9.71,4.03,9.75,3.81-.15,3.35-6.94,3.34-8.48-.17-58.67-.33-117.35-.52-176.02-.05-15.72,6.49-23.13,20.13-22.65,10.22.36,12.32,4.4,15.5,11.55,2.11,4.75,3.18,14.99,3.27,20.35.89,55.7,1.61,111.41,2.26,167.12.04,3.38.31,20.18,5.95,20,3.35-.11,3.19-9.54,3.24-13.6.18-14.47-.25-28.94-.43-43.41-.28-22.75-.58-45.5-.82-68.25-.11-10.09,6.68-18.16,15.56-18.66,8.94-.51,16.39,5.95,17.51,15.82,1.06,9.34,1.88,18.73,2.24,28.13,1.19,30.94,5.66,115.14,4.1,155.68-1.51,37.43-2.57,75.28-15.12,111.24-8.44,24.19-23.59,44.63-49.01,46.25-1.67.11-6.85.6-7.22-1.03-1.08-4.74,28.69-10.43,38.65-31.43,7.53-15.23,12.74-31.93,16.57-48.55,3.26-14.12,3.34-29.01,4.38-43.59.64-9,2.43-47.47,1.14-113.31-.78-32.49-1.65-64.99-3.35-97.44-.23-4.29-4.51-10.8-8.25-11.95-6.61-2.03-8.17,4.14-8.31,9.87-.28,12.15.87,30.68,1.27,63.1.58,18.85,1.95,37.78-.46,56.43-1.56,12.05-7.13,11.87-12.44,11.96-6.03.11-10.03-2.88-11.07-11.65-7.01-59.3-2.14-118.86-5.1-178.2-.35-7.07-.61-14.53-3.34-21.05-1.08-2.57-4.06-5.47-6.93-5.77-3.2-.33-4.93.41-6.89,1.89-5.35,4.05-3.91,12.12-3.77,18.05.44,19.39.8,38.79.81,58.19.03,37.12-.25,74.24-.3,111.37-.02,11.96-3.28,17.36-11,17.38-7.18.02-14.46-8.55-14.88-17.74-.21-4.61-.1-9.24-.16-13.85-.71-56.96-1.36-113.92-2.23-170.88-.1-6.59-.34-14.11-2.3-19.73s-4.59-9.85-10.67-9.74c-6.43.12-8.53,8.09-9.11,11.61-1.64,10.1-.86,98.11-.53,122.74.29,21.82.72,43.63.75,65.45.01,6.6.09,13.64-2.09,19.67-1.61,4.44-3.17,10.61-10.66,10.65-4.97.03-9.41-3.24-11.23-6.79-3.17-6.18-5.12-13.89-5.31-20.76-1.06-39.35-1.19-78.73-1.99-118.09-.33-16.19-.99-32.41-2.65-48.5-.53-5.17-.86-12.62-9.18-13.59-8.27-.96-11.25,4.05-12.7,10.95-.54,2.59-1.08,13.15-1.06,15.73.13,20.94-.34,33.9.21,54.83.67,25.43,2.17,50.85,2.55,76.28.32,22.05-1.77,94.97-10.52,115.7-2.43,5.77-7.98,11.49-15.2,9.23-5.15-1.61-10.86-7.23-12.75-12.37-5.61-15.33-9.06-31.42-14.08-46.99-6.96-21.6-26.74-55.95-43.56-54.18-1.58.17-2.91,1.44-3.11,2.93-.66,4.99,4.17,12.7,9.22,24.57,7.41,17.43,12.76,35.8,17.29,54.16,7.85,31.78,10.38,65.36,20.77,96.22,11.71,34.79,32.7,63.24,72.15,72.5,37.04,8.69,69.53,1.18,95.51-26.53,20.17-21.51,24.58-48.35,17.03-76.46-7.55-28.11-27.59-45.28-55.08-50.73-31.12-6.17-61.64.95-81.02,33.23-18.99,31.63-12.65,75.23,23.89,93.56,34.7,17.41,75.7-5.81,82.24-39.68,2.6-13.46,2.58-26.19-4.36-38.36-7.31-12.82-18.24-19.51-33.09-19.65-11.21-.11-21.86.32-31.76,7.59-19.01,13.97-20.33,43.84-2.88,59.13,11.32,7,24.87,3.99,33.05-2.05,7.48-5.52,13.15-19.91,8.76-26.74-6.48-10.07-23.05-3.9-23.54-4.4"
      />
      <path
        ref={pathRef2}
        class="back"
        style={{
          fill: "none",
          // stroke: "#d4ab29",
          stroke: "#997744",

          strokeWidth: 2.5,
        }}
        d="m158.37,361.49c-1.61-1.62,6.76-11.85,18.82-8.89,11.42,2.8,16.69,15.28,14.1,25.98-4.69,19.32-21.44,31.04-41.75,29.19-16.32-1.48-32.15-18.62-31.7-36.65.68-27.18,19.37-51.11,49.47-52.56,25.3-1.22,46.63,14.85,52.71,34.61,11.2,36.34-11.98,75.94-49.28,84.18-23.47,5.19-44.07.3-61.09-15.24-12.91-11.79-20.61-27.42-21.67-45.9-1.51-26.28,5.96-48.83,25.29-66.91,13.12-12.27,29.15-18.34,46.9-19.9,22.25-1.95,43.21,1.55,61.28,15.79,4.74,3.73,9.03,8.03,13.51,12.08,2,1.81,3.94,4.2,5.91,7.03,3.01,4.33,5.06,9.82,7.5,15.83,6.38,15.74,6.81,31.87,4.32,48.44-5.64,37.53-30.19,58.53-63.91,70.37-10.08,3.54-17.99,5.94-30.18,6.02-43.46.3-83.58-22.81-101.72-64.63-9.83-22.65-15.77-46.53-19.59-71.21-5.1-32.95-12.62-65.56-26.78-96.16-3.36-7.27-7.32-14.41-9.51-22.04-1.34-4.65-1.66-11.68.96-14.78,2.49-2.95,9.68-3.71,14.29-2.81,22.32,4.39,32.37,22.41,41.3,40.44,6.52,13.16,11.25,25.92,15.34,41.33,2.54,9.57,5.13,30.1,11.99,31.72,7.32-.03,9.93-16.6,10.77-25.72,2.2-23.98,2.88-48.14,3.02-72.24.31-52.81-.18-105.63-.07-158.45.01-5.23,1.29-10.67,3.06-15.62,2.55-7.14,7.95-10.81,15.92-11.05,8.54-.27,14.07,4.53,17.35,11.04,2.7,5.37,3.9,16.1,4.49,40.77.98,50.79.97,78.86,1.99,129.65.19,9.36,3.93,27.75,8.71,27.43,3.46,0,4.52-9.79,4.64-14.47.52-20.89.75-41.8.56-62.7-.25-28.08-1.18-128.44.58-141.72C157.25,3.64,163.4.12,171.81,0c10.81-.15,15.52,9.95,18.01,15.12,3.25,6.75,4.29,15.05,4.43,22.72,1.16,61.88,1.88,123.77,2.74,185.65.03,1.85,0,9.71,4.03,9.75,3.81-.15,3.35-6.94,3.34-8.48-.17-58.67-.33-117.35-.52-176.02-.05-15.72,6.49-23.13,20.13-22.65,10.22.36,12.32,4.4,15.5,11.55,2.11,4.75,3.18,14.99,3.27,20.35.89,55.7,1.61,111.41,2.26,167.12.04,3.38.31,20.18,5.95,20,3.35-.11,3.19-9.54,3.24-13.6.18-14.47-.25-28.94-.43-43.41-.28-22.75-.58-45.5-.82-68.25-.11-10.09,6.68-18.16,15.56-18.66,8.94-.51,16.39,5.95,17.51,15.82,1.06,9.34,1.88,18.73,2.24,28.13,1.19,30.94,5.66,115.14,4.1,155.68-1.51,37.43-2.57,75.28-15.12,111.24-8.44,24.19-23.59,44.63-49.01,46.25-1.67.11-6.85.6-7.22-1.03-1.08-4.74,28.69-10.43,38.65-31.43,7.53-15.23,12.74-31.93,16.57-48.55,3.26-14.12,3.34-29.01,4.38-43.59.64-9,2.43-47.47,1.14-113.31-.78-32.49-1.65-64.99-3.35-97.44-.23-4.29-4.51-10.8-8.25-11.95-6.61-2.03-8.17,4.14-8.31,9.87-.28,12.15.87,30.68,1.27,63.1.58,18.85,1.95,37.78-.46,56.43-1.56,12.05-7.13,11.87-12.44,11.96-6.03.11-10.03-2.88-11.07-11.65-7.01-59.3-2.14-118.86-5.1-178.2-.35-7.07-.61-14.53-3.34-21.05-1.08-2.57-4.06-5.47-6.93-5.77-3.2-.33-4.93.41-6.89,1.89-5.35,4.05-3.91,12.12-3.77,18.05.44,19.39.8,38.79.81,58.19.03,37.12-.25,74.24-.3,111.37-.02,11.96-3.28,17.36-11,17.38-7.18.02-14.46-8.55-14.88-17.74-.21-4.61-.1-9.24-.16-13.85-.71-56.96-1.36-113.92-2.23-170.88-.1-6.59-.34-14.11-2.3-19.73s-4.59-9.85-10.67-9.74c-6.43.12-8.53,8.09-9.11,11.61-1.64,10.1-.86,98.11-.53,122.74.29,21.82.72,43.63.75,65.45.01,6.6.09,13.64-2.09,19.67-1.61,4.44-3.17,10.61-10.66,10.65-4.97.03-9.41-3.24-11.23-6.79-3.17-6.18-5.12-13.89-5.31-20.76-1.06-39.35-1.19-78.73-1.99-118.09-.33-16.19-.99-32.41-2.65-48.5-.53-5.17-.86-12.62-9.18-13.59-8.27-.96-11.25,4.05-12.7,10.95-.54,2.59-1.08,13.15-1.06,15.73.13,20.94-.34,33.9.21,54.83.67,25.43,2.17,50.85,2.55,76.28.32,22.05-1.77,94.97-10.52,115.7-2.43,5.77-7.98,11.49-15.2,9.23-5.15-1.61-10.86-7.23-12.75-12.37-5.61-15.33-9.06-31.42-14.08-46.99-6.96-21.6-26.74-55.95-43.56-54.18-1.58.17-2.91,1.44-3.11,2.93-.66,4.99,4.17,12.7,9.22,24.57,7.41,17.43,12.76,35.8,17.29,54.16,7.85,31.78,10.38,65.36,20.77,96.22,11.71,34.79,32.7,63.24,72.15,72.5,37.04,8.69,69.53,1.18,95.51-26.53,20.17-21.51,24.58-48.35,17.03-76.46-7.55-28.11-27.59-45.28-55.08-50.73-31.12-6.17-61.64.95-81.02,33.23-18.99,31.63-12.65,75.23,23.89,93.56,34.7,17.41,75.7-5.81,82.24-39.68,2.6-13.46,2.58-26.19-4.36-38.36-7.31-12.82-18.24-19.51-33.09-19.65-11.21-.11-21.86.32-31.76,7.59-19.01,13.97-20.33,43.84-2.88,59.13,11.32,7,24.87,3.99,33.05-2.05,7.48-5.52,13.15-19.91,8.76-26.74-6.48-10.07-23.05-3.9-23.54-4.4"
      />
    </svg>
  );
};
export default SwirlyHand;
