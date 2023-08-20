// About.tsx
import { FunctionComponent } from "preact";


const About: FunctionComponent = () => {
  return (
    <div id="parentDiv" className="flex flex-col-reverse sm:flex-row mt-20 gap-6">
      <div id="aboutText" className="flex-1 flex-shrink-0 text-xl sm:ml-60 text-center">
        <p className="mb-5 -mt-4">A little about me ~</p>

        <p className="mb-5">
          8 years ago I opened my path to yoga and eventually joined a Yoga
          Teacher Training that heavily focused on breathwork and meditation. My
          teachers welcomed me with open hearts and for that and all the wisdom
          they shared, I am forever grateful.
        </p>

        <p className="mb-5">
          My interest in spirituality and alternative healing continued to grow
          and led me to be curious about the healing power of love and energy.
          As a Reiki recipient and Practinioner, I am truly *blissed* to be able
          to share this experience with you all.
        </p>

        <p className="mb-5">My other knowledge/interests:</p>

        <p className="-mb-1">Chakra System</p>
        <p className="-mb-1">Buddhism</p>
        <p className="-mb-1">Hatha Yoga</p>
        <p className="-mb-1">Internal Family System</p>
        <p className="-mb-1">Nonviolent Communication</p>
        <p className="mb-5">Crystal Connection</p>

        <p className="mb-5">
          Thank you for visiting ❤︎ If it feels right for you, please reach out.
        </p>

        <p className="">Namaste</p>
        <p className="sm:mb-5">Kalee</p>
      </div>

      <div
        id="aboutImage"
        className="flex justify-center items-start flex-1 mb-5 mt-5 sm:mr-40 sm:mt-0 overflow-hidden sm:p-0 p-2.5"
      >
        <img
          src="/src/assets/about.jpg"
          alt="standing and looking cute"
          className="sm:-mx-2.5 object-contain"
        />
      </div>
    </div>
  );
};

export default About;
