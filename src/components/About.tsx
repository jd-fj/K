// About.tsx
import { FunctionComponent } from 'preact';

const About: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    {/* <div className="border-8 border-red-300 flex items-center justify-center h-screen"> */}
        <h1 className="text-white-50">About</h1>
        <p>This is the About page</p>
    </div>
  );
}

export default About;

// a version where there's just one div but there is no outer div stretching to the entire viewport:

// about.tsx
// import { FunctionComponent } from 'preact';

// const About: FunctionComponent = () => {
//   return (
//     <div className="border-8 border-red-300 inline-flex items-center justify-center h-screen">
//       <h1>About</h1>
//       <p>This is the About page</p>
//     </div>
//   );
// }

// export default About;
