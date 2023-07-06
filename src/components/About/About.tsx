// About.tsx
import { FunctionComponent } from "preact";
import about from "../../assets/about.jpg";

const About: FunctionComponent = () => {
  return (
    <div id="parentDiv" className="flex flex-col sm:flex-row items-start justify-center mt-20">
      <div
        id="aboutText"
        className="flex-1 text-xs sm:text-sm md:text-md lg:text-lg mx-10"
      >
        <p className="mb-5">
          Where does my journey begin? I feel we are all always on one, ever
          since we come out of that womb and even before. Reflecting back, I
          think my child Self found freedom and connection in dancing growing
          up. As soon as adulthood hit, I unfortunately had to get Spinal Fusion
          surgery and that haulted my ability to practice what I knew and what I
          loved.
        </p>
        <p className="mb-5">
          8 years ago I opened my path to yoga and the curiousity of
          spirituality and alternative healing. I joined a Yoga Teacher Training
          with the most amazing and authentic teachers, followed them to Bali
          for a Summer and learned more than I ever knew about breathwork,
          meditation, and the body.
        </p>
        <p className="mb-5">
          Since then, I have gone back to my past to heal through some trauma I
          didn't even know existed and utilized the tools I had learned to
          explore more of natural healing which led me to Reiki. As a recipient
          of Reiki, I started to feel an absence of stress and a lift in my day
          to day anxieties. I love talking through what my Practitioner recieved
          from the appointments and became curious to learn more about what this
          life energy of love is capable of.
        </p>
        <p className="mb-5">
          I am now a certified Reiki I Practioner and am excited to share the
          healing energy of love to all who would like to try it. I am currently
          holding appointments out of my place in Renton so please reach out if
          this is of interest to you or if you want to learn more.
        </p>
        <p className="mb-5">
          Everyone is capable of healing. You are already on your journey, you
          are beautiful, and you are loved. Thank you for visiting and I truly
          hope to connect {`<3`}
        </p>
        <p className="mb-5">Namaste Kalee</p>
      </div>

      <div id="aboutImage" className="flex-1 mx-10">
        <img
          src={about}
          alt="standing and looking cute"
          className=""
        />
      </div>
    </div>
  );
};

export default About;
