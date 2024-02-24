import { FunctionComponent } from "preact";
import about from "/src/assets/about2_not_square.jpg";
import Buddah from "../../assets/Buddah";

const About: FunctionComponent = () => {
  return (
    <>
      <div
        id="parentDiv"
        className="flex flex-col-reverse md:flex-row md:mt-16 mt-0 gap-[6%] justify-center "
      >
        <div
          id="aboutText"
          className="flex-1 md:ml-[5%] lg:ml-[20%] text-center md:mx-2 mx-6 "
        >
          <p className="mb-4 -mt-4 text-lg">Hello & thank you for visiting!</p>

          <p className="mb-4 text-lg">
            My name is Kalee and I am truly blissed to be able to share with you
            the warmth and healing of Reiki energy and Mindfulness tools that
            can enhance compassion for the Self and others. Throughout my
            journey, I have delved into, practiced & healed from ~
          </p>

          <p className="-mb-1 text-lg">Reiki</p>
          <p className="-mb-1 text-lg">Chakra Work</p>
          <p className="-mb-1 text-lg">Hatha Yoga</p>
          <p className="-mb-1 text-lg">Buddhism</p>
          <p className="-mb-1 text-lg">Breathwork</p>
          <p className="-mb-1 text-lg">Tai Chi</p>
          <p className="-mb-1 text-lg">Mindfulness Coaching</p>
          <p className="-mb-1 text-lg">Internal Family Systems</p>
          <p className="-mb-1 text-lg">Nonviolent Communication</p>
          <p className="-mb-1 text-lg">Crystal Connection</p>
          <p className="mb-4 text-lg">Meditation</p>

          <p className="mb-4 text-lg">
            I feel very grateful for the wisdom passed down from my
            Spiritual Teachers and am happy to be participating in the teachings and healing of others.
          </p>
          <p className="text-lg">Please reach out to connect.</p>

          <p className="text-lg">Namaste</p>

          {/* Desktop view Buddah component, visible only on md screens and up */}
          <div className="hidden md:block ml-[58%]">
            <Buddah className="h-10v w-10v" />
          </div>
        </div>

        <div
          id="aboutImage"
          className="flex flex-col justify-center items-center flex-1 mb-5 mt-5 md:mr-[18%] sm:-mt-6 overflow-hidden mx-10 md:mx-0 mx-auto w-1/2"
        >
          <img
            src={about}
            alt="reiki practitioner pleasantly standing in the daylight"
            className="sm:-mx-0 object-contain  mb-4"
          />
          <div id="newTextBlock" className="hidden md:block text-center text-lg mt-4">
            <p className="-mb-1">Yoga Teacher Training </p>
            <p className="mb-4">Hatha Yoga Center of Seattle / Bali</p>

            <p className="-mb-1">Reiki Master Certification</p>
            <p className="mb-4">Whidbey Island Reiki</p>

            <p className="-mb-1">ACTP ICF Level 1 Coach (ACC)</p>
            <p className="">Mindfulness Coaching School</p>
          </div>
        </div>
      </div>

      {/* Mobile view Buddah component, hidden on md screens and up */}
      <div className="flex justify-end mr-[33%] mb-16 md:hidden">
        <Buddah className="h-14v w-14v" />
      </div>
    </>
  );
};

export default About;
