// Mush.tsx
interface MushProps {
    className?: string;
  }
  
  const Mush = ({ className = '' }: MushProps) => (
      <svg version="1.1" id="mush_svg" xmlns="http://www.w3.org/2000/svg"
          width="200px" height="200px" viewBox="0 0 1700 1300"
          style="enable-background:new 0 0 1728 1296;"
          className={className}>			
          <g>
              <path d="M372.33,681.86c-17.63-36.04-2.75-75.65,20.84-93.97c121.79-37.08,488.77-807.02,564.19-484.94 c49.24,145.81,96.7,292.12,193,415.97c113.09,144.25-73,339.34-231.54,294.64c5.33,130.45,25.85,257.25,0.7,386.14 c-8.37,33.47-33.7,23.55-52.72,30.72c-36.54,13.78-73.2,27.25-110.01,40.26c-3.29,1.16-8.1-2.02-12.21-3.19 c3.11-3.28,5.63-8.28,9.43-9.6c46.62-16.22,94.29-29.81,139.8-48.67c21.36-8.85,18.65-35.46,20.19-55.29 c5.56-186.09-5.7-374.63-24.37-559.4c-5.6-29.63-46-11.89-53.29-16.18c-53.83,1.37-94.23-13.42-132.21,5.18 c1.8,2.77,3.68,5.68,0.38,0.59c-13.89,51.96-26.09,97.56-38.3,143.26c62.24,8.15,36.36-44.28,45.32-70.66 c9.02-19.53-4.19-56.77,6.95-69.38c3.09,3.88,9.05,7.94,8.83,11.62c-2.04,34.7-5.3,69.33-7.7,104.01 c-0.28,3.99,2.48,11.7,3.96,11.73c8.04,0.17,10.42-5.69,10.2-13.08c-0.85-28.36-1.89-56.73-2.02-85.1 c-0.02-3.69,4.87-7.41,7.49-11.11c24.29,196.26,8.91,401.08,48.78,597.61c0.86,6.78-0.92,13.89-8.35,20.99 c-33.81-157.32-36.2-317.35-42.97-477.1c-3.16-37.21-23.65,1.04-36.56-1.01C595.07,783.5,441.52,786.24,372.33,681.86z M596.57,625.54c-7.41,5.13-14.82,10.26-22.24,15.39c1.88,2.07,3.75,4.15,5.63,6.22c5.96-7.27,11.92-14.54,17.99-21.85 C597.96,625.3,597.9,625.39,596.57,625.54z M681.73,595.31c-11.48,3.91-30.55,5.01-33.19,12.19 c-16.58,45.09-29.51,91.54-44.02,138.77c7.27,0.5,12.05,0.84,18.71,1.3c-3.05-4.06-4.96-6.59-5.58-7.41 c68.69-27.68,47.84-95.45,65.56-145.37C683.21,594.79,683.14,594.86,681.73,595.31z M569.26,427.49c-0.31-0.39-0.61-0.78,0.6,0.76 c-1.41-1.04-0.88-0.65-0.77,1.06c-50.27,52.79-92.22,113.25-152.71,156.78c-52.91,30.79-44.41,106.85-23.35,84.41 c168.59-141.95,614.12-181.27,703.82,74.53c1.4,6.59,7.6,6.1,13.08,1.97c59.84-45.04,78.64-149.77,33.01-208.69 C850.74,107.44,1007.05-259.27,569.26,427.49z M907.66,615.76c4.76,62.6,9.53,125.21,14.35,188.53c4.46-0.37,10.25-0.86,16.6-1.38 c-7.44-68.43-14.74-135.61-22.08-203.21c7.39-0.5,12.94,4.59,13.78,12.57c5.43,51.78,9.68,103.69,15.73,155.39 c1.41,12.04-6.47,30.19,8.17,35.57c49.67,18.23,89.59-13.09,76.66-62.16c-8.81-33.45,11.15-83.31-45.85-95.14 c-7.37-1.53,2.55-6.8,6.2-11.82c-6.13-3.24-11.81-6.24-19.19-10.14c-1.38,15.43,21.57,194.06-1.83,149.65 c-2.1-32.76-2.86-65.62-5.68-98.31c-3.33-38.49-3.61-80.1-58.14-82.41C906.7,598.86,907.16,606.54,907.66,615.76z M508.32,623.47 c-59.21,7.99-17.22,70.89-52.01,95.08c1.78-26.42,3.43-50.79,5.29-78.37c-22.68,16.3-63.96,27.97-58.73,46.31 c7.56,26.49,45.59,39.96,75.08,43.96c14.27,1.94,5.07-25.22,13.8-38.86c-5.69,1.76-8.69,2.69-11.68,3.62 C500.57,675.78,504.95,650.3,508.32,623.47z M548.46,716.48c-2.56,7.58-5.12,15.16-9.41,27.89c18.4,0,45.69,4.98,48.19-0.81 c16.08-37.18,26.74-76.73,39.18-115.49c-23.52,17.66-49.03,30.41-57.4,58.09C552.75,688.52,554.38,704.41,548.46,716.48z M1076.03,723.09c-13.21-17.4-26.41-34.8-43.46-57.27c6.98,43.2,12.87,79.64,18.96,117.28c14.57-7.46,26.18-13.4,37.75-19.32 C1084.54,749.4,1080.46,736.99,1076.03,723.09z M507.97,685.22c-3.5,11.16-7.93,22.13-10.32,33.52 c-6.01,28.68,22.04,24.8,26.23,17.38c14.5-25.71,22.46-55.13,34.37-87.06C537.59,660.47,518.44,665.38,507.97,685.22z M560.24,631.54c10.68-7.94,14.45-18.57,12.98-31.39c-31.95-5.88-63.01,26.6-54.4,57.1C532.34,648.78,545.61,640.46,560.24,631.54z M586.32,604.74c15.64,13.98,27.09-5.8,41.2-5.53c2.5,0.05,7.61-9.15,7.33-9.4c-17.61-15.86-31.6,6.94-49.29,3.01 C585.78,597.54,585.92,600.44,586.32,604.74z"/>
              <path d="M914.73,331.97c9.12,28.11,18.24,55.34,29.01,87.53c-60.9-53.95-26.08-145.28-100.35-187.32c-1.49-0.87-2.23-6.82-1.4-7.35 C873.3,205.67,915.38,306.06,914.73,331.97z"/>
          </g>
      </svg>
  );
  
  export default Mush;