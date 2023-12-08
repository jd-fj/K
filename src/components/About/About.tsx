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
          className="flex-1 md:ml-[5%] lg:ml-[20%] text-center md:mx-0 mx-10 "
        >
          <p className="mb-4 -mt-4">Hello & thank you for visiting!</p>

          <p className="mb-4 ">
            My name is Kalee and I am truly blissed to be able to share with you
            the warmth and healing of Reiki energy and Mindfulness tools that
            can enhance compassion for the Self and others. Throughout my
            journey, I have delved into, practiced & healed from ~
          </p>

          <p className="-mb-1">Reiki</p>
          <p className="-mb-1">Chakra Work</p>
          <p className="-mb-1">Hatha Yoga</p>
          <p className="-mb-1">Buddhism</p>
          <p className="-mb-1">Breathwork</p>
          <p className="-mb-1">Tai Chi</p>
          <p className="-mb-1">Internal Family Systems</p>
          <p className="-mb-1">Non-violent Communication</p>
          <p className="-mb-1">Crystal Connection</p>
          <p className="mb-4">Meditation</p>

          <p className="mb-4">
            I feel very grateful for the wisdom passed down from my Therapists &
            Spiritual Teachers and am excited to participate in the teachings
            and healing of others.
          </p>
          <p className="">Please reach out to connect.</p>

          <p className="">Namaste</p>
        </div>

        <div
          id="aboutImage"
          className="flex justify-center items-start flex-1 mb-5 mt-5 md:mr-[18%] sm:mt-5 overflow-hidden  mx-10 md:mx-0 mx-auto w-1/2"
        >
          <img
            src={about}
            alt="reiki practitioner pleasantly standing in the daylight"
            className="sm:-mx-2.5 object-contain max-w-full flex-shrink-0 mb-6"
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
