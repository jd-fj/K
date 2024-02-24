// About.tsx
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
          className="flex-1 md:ml-[5%] lg:ml-[20%] text-center md:mx-0 mx-6 "
        >
          <p className="mb-4 -mt-4 lg:text-lg text-lg">Hello & thank you for visiting!</p>

          <p className="mb-4 lg:text-lg text-lg">
            My name is Kalee and I am truly blissed to be able to share with you
            the warmth and healing of Reiki energy and Mindfulness tools that
            can enhance compassion for the Self and others. Throughout my
            journey, I have delved into, practiced & healed from ~
          </p>

          <p className="-mb-1 lg:text-lg text-lg">Reiki</p>
          <p className="-mb-1 lg:text-lg text-lg">Chakra Work</p>
          <p className="-mb-1 lg:text-lg text-lg">Hatha Yoga</p>
          <p className="-mb-1 lg:text-lg text-lg">Buddhism</p>
          <p className="-mb-1 lg:text-lg text-lg">Breathwork</p>
          <p className="-mb-1 lg:text-lg text-lg">Tai Chi</p>
          <p className="-mb-1 lg:text-lg text-lg">Mindfulness Coaching</p>
          <p className="-mb-1 lg:text-lg text-lg">Internal Family Systems</p>
          <p className="-mb-1 lg:text-lg text-lg">Nonviolent Communication</p>
          <p className="-mb-1 lg:text-lg text-lg">Crystal Connection</p>
          <p className="mb-4 lg:text-lg text-lg">Meditation</p>

          <p className="mb-4 lg:text-lg text-lg">
            I feel very grateful for the wisdom passed down from my Therapists &
            Spiritual Teachers, and am very happy to be participating in the teachings and healing of others. Please reach out to connect.
          </p>
          <p className="lg:text-lg text-lg">Please reach out to connect.</p>

          <p className="lg:text-lg text-lg">Namaste</p>
        </div>

        <div
          id="aboutImage"
          className="flex justify-center items-start flex-1 mb-5 mt-5 md:mr-[18%] sm:mt-5 overflow-hidden  mx-10 md:mx-0 mx-auto w-1/2"
        >
          <img
            src={about}
            alt="reiki practitioner pleasantly standing in the daylight"
            className="sm:-mx-2.5 object-contain max-w-full flex-shrink-0 mb-4"
          />
        </div>
      </div>
      <div className="flex justify-end mr-[33%] sm:mr-[58%] mb-16">
        <Buddah className="sm:h-10v sm:w-10v h-14v w-14v"/>
      </div>
    </>
  );
};

export default About;
