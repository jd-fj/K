// About.tsx
import { FunctionComponent } from "preact";
import about from '/src/assets/about2.jpg';

const About: FunctionComponent = () => {
  return (
    <div id="parentDiv" className="flex flex-col-reverse md:flex-row mt-20 gap-[6%] ">
      <div id="aboutText" className="flex-1  text-xl md:ml-[15%] text-center md:mx-0 mx-10">
        <h1 className="mb-5 -mt-4 text-2xl">A little about me ~</h1>

        <p className="mb-5">
          9 years ago I opened my path to yoga and joined a Yoga Teacher Training that heavily focused on breathwork, meditation, and tuning into the body. My teachers welcomed me with open hearts and for that and all the wisdom they shared, I am forever grateful.
        </p>

        <p className="mb-5">
          My interest in spirituality and alternative healing continued to grow and led me to want to learn more, practice healthy ways of living, and turn inward. Throughout my journey, I explored many mindfulness tools to find what worked best for my Self Practice, which include ~
        </p>

        {/* <p className="mb-5">My other knowledge/interests:</p> */}

        <p className="-mb-1">Reiki</p>
        <p className="-mb-1">The Chakra System</p>
        <p className="-mb-1">Hatha Yoga</p>
        <p className="-mb-1">Buddhism</p>
        <p className="-mb-1">Breathwork</p>
        <p className="-mb-1">Visual Meditation</p>
        <p className="-mb-1">Internal Family System</p>
        <p className="-mb-1">Nonviolent Communication</p>
        <p className="-mb-1">Crystal Connection</p>
        <p className="mb-5">Pressure Point Massage</p>

        <p className="mb-5">
        As a now Reiki Practitioner myself, I feel truly *blissed* to be able to share the love and kindness of Reiki and Mindfulness with others. This is all work I am still doing and I just feel so grateful for the wisdom passed down from all my spiritual teachers and friends. If you feel in need of healing, I’d love to connect and see if I can help or guide in any way.
        </p>
        <p className="mb-5">
          Appreciate you visiting ❤︎
        </p>

        <p className="">Namaste</p>
        <p className="sm:mb-5">Kalee</p>
      </div>

      <div
        id="aboutImage"
        className="flex justify-center items-start flex-1 mb-5 mt-5 md:mr-[10%] sm:mt-0 overflow-hidden  mx-10 md:mx-0"
      >
        <img
          src={about}
          alt="standing and looking cute"
          className="sm:-mx-2.5 object-contain max-w-full flex-shrink-0 "
        />
      </div>
    </div>
  );
};

export default About;
