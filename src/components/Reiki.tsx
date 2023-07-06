// Reiki.tsx
import { FunctionComponent } from 'preact';

const Reiki: FunctionComponent = () => {
  return (
    <>
   {/* <div className="flex flex-col items-center justify-center"> */}
   <div className="items-center justify-center lg:text-3xl sm:text-xl text-brown-200 m-20">
      <h1 className="lg:text-5xl sm:text-2xl">What is Reiki?</h1>
      <p className="text-brown-300">Reiki is a hands-on healing practice using qi (or "chi") to promote the body's natural ability to heal itself.</p>
   </div>
    </>
  );
}

export default Reiki;
