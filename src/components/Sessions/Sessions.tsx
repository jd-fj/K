import { FunctionComponent } from "preact";
import TwoDaisies from "../../assets/two-daisies.png";
import LucyOutside from "../../assets/lucy-outside.jpg";

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
          <img className="hide-on-mobile ml-auto hidden" src={TwoDaisies} />
        </div>

        {/* COLUMN 2 */}
        <div id="Column2" className="lg:w-1/3 mx-1 mb-4">
          <p className="mx-6 leading-tight text-lg mt-5">
            Reiki is a cumulative healing process as each treatment builds upon the previous one received. A series of sessions is highly recommended.</p>
          <p className="mx-6 leading-tight text-lg mb-5"> Allow 90 minutes per session.
          </p>
          <h1 className="text-shadow-effect text-3xl lg:mb-4">
            <b className="mb-1 lg:mb-4">Sessions</b>
          </h1>

          <h2 className="text-2xl text-left">
            <b>Reiki Healing</b>
          </h2>
          <p className="mx-6 leading-tight text-lg">
            Hands on Reiki Healing Sessions with a focus on Mindfulness, the
            Physical Body & Chakra Alignment.
          </p>
          <p className="text-xl lg:text-2xl mt-2">$120</p>
          <p className="mx-6 leading-tight text-lg -mt-2 mb-6">(first session half price)</p>

          <h2 className="text-2xl text-left">
            <b>Reiki Healing , 5 Session Series</b>
          </h2>
          <p className="mx-6 leading-tight text-lg">
            Offered for those who are interested in releasing blocked energy that may be stubborn or older in nature. Best if all 5
            sessions are used within 30 days, valid through 90 days.
          </p>
          <p className="text-xl lg:text-2xl mt-2 mb-6">$500</p>
          <h2 className="text-2xl text-left">
            <b>Pet Reiki Healing</b>
          </h2>
          <p className="mx-6 leading-tight text-lg">
            I travel to you and perform in a space the animal feels safe and comfortable in. Typically 20-30 minutes.
          </p>
          <p className="text-xl lg:text-2xl mt-2 mb-6">$60</p>


          <h2 className="text-2xl text-left">
            <b>Mindfulness Coaching</b>
          </h2>
          <p className="mx-6 leading-tight text-lg">
            One on one talk sessions that are designed to inspire, invoke connection with the Self & move forward through life in a holistic way. May incorporate Breathwork, Meditation, learnings on Non-Violent Communication, the Chakra System & Crystal Connection.
          </p>
          <p className="text-xl lg:text-2xl mt-2 ">60 minute <span className="ml-4">$90</span></p>
          <p className="mx-6 leading-tight text-lg -mt-2 mb-6">(Remote or in person available)</p>
        </div>

        {/* COLUMN 3 */}
        <div id="Column3" className="lg:w-1/4">
          <h1 className="text-shadow-effect text-3xl mb-1 lg:mb-6">
            <b>Contact</b>
          </h1>
          <p className="mx-6 mb-6 leading-tight text-lg">
            Sessions are held out of my home in the Renton Highlands. To schedule, please send me a message {"☺︎"}
          </p>
          <p className="mx-6 leading-tight text-lg">Text if you have my number.</p>
          <p className="mx-6 leading-tight text-lg">yellowflowerholistichealing@gmail.com</p>
          <p className="mx-6 mb-4 leading-tight text-lg">@yellowflowerholistichealing</p>
          <img className="hide-on-desktop mx-auto mb-16 block lg:hidden mt-12" src={TwoDaisies} />
          <img className="hide-on-mobile mx-auto hidden lg:block w-[16em] mt-12" src={LucyOutside} />
        </div>


      </div>
    </div>
  );
};

export default Sessions;