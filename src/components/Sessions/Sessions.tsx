import { FunctionComponent } from "preact";
import TwoDaisies from "../../assets/two-daisies.png";
import LucyOutside from "../../assets/lucy-outside.jpg";
import "./sessions.css";

// hide-on-desktop: block lg:hidden
// hide-on-mobile: hidden lg:block

const Sessions: FunctionComponent = () => {
  return (
    <div
      id="ParentSessionsDiv"
      className="text-center mx-auto mt-4 lg:mt-10 lg:mr-20"
    >
      <div className="flex flex-col lg:flex-row lg:mx-10 lg:gap-14">

        {/* COLUMN 1 */}
        <div id="Column1" className="lg:w-1/4 flex lg:flex-col justify-end">
          <img className="hide-on-mobile ml-auto hidden lg:block" src={TwoDaisies} />
        </div>


        {/* COLUMN 2 */}
        <div id="Column2" className="lg:w-1/3 mx-1">
          <h1 className="text-shadow-effect text-3xl lg:mb-4">
            <b className="mb-1 lg:mb-4">Sessions</b>
          </h1>

          <h2 className="text-2xl text-left">
            <b>Reiki Healing</b>
          </h2>
          <p className="mx-6 leading-tight lg:text-lg">
            Hands on Reiki Healing Sessions with a focus on Mindfulness, the
            Physical Body & Chakra Alignment.
          </p>
          <p className="text-xl lg:text-2xl mt-2">60 minute $120</p>
          <p className="text-xl lg:text-2xl mb-4">90 minute $165</p>

          <h2 className="text-2xl text-left">
            <b>Mindfulness Coaching</b>
          </h2>
          <p className="mx-6 leading-tight lg:text-lg">
            One on One or Partner Sessions that may incorporate Breathwork,
            Meditation, Yoga Postures, learnings on </p>
          <p className="mx-6 leading-tight lg:text-lg">Non-Violent Communication,
            the Chakra System
          </p>
          <p className="mx-6 leading-tight lg:text-lg">& Crystal Connection.</p>
          <p className="text-xl lg:text-2xl mt-2 mb-4 lg:mb-8">60 minute $90</p>
          <p className="mx-6 mb-2 leading-tight lg:text-lg">
            Sessions are held out of my home in the Renton Highlands
          </p>
          <p className="mb-4 mx-6 leading-tight lg:text-lg">
            To schedule, please send me a message {"☺︎"}
          </p>
        </div>


        {/* COLUMN 3 */}
        <div id="Column3" className="lg:w-1/4">
          <h1 className="text-shadow-effect text-3xl mb-1 lg:mb-6">
            <b>Contact</b>
          </h1>
          <p className="mx-6 leading-tight lg:text-lg lg:mb-4">Text if you have my number.</p>
          <p className="mx-6 leading-tight lg:text-lg lg:mb-4">yellowflowerholistichealing@gmail.com</p>
          <p className="mx-6 mb-4 leading-tight lg:text-lg">@yellowflowerholistichealing</p>
          <img className="hide-on-desktop mx-auto mb-16 block lg:hidden" src={TwoDaisies} />
          <img className="hide-on-mobile mx-auto hidden lg:block w-[14em] mt-12" src={LucyOutside} />
        </div>



      </div>
    </div>
  );
};

export default Sessions;