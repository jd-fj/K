// about.tsx
import { FunctionComponent } from 'preact';

const About: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    {/* <div className="border-8 border-red-300 flex items-center justify-center h-screen"> */}
      <div className="">
        <h1 className="">About</h1>
        <p>This is the About page</p>
      </div>
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
