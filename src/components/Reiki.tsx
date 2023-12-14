// Reiki.tsx
import { FunctionComponent } from "preact";
import Flowers from '../assets/flowers.png'
import SmallSwirlyHand from "../assets/SmallSwirlyHand";

const Reiki: FunctionComponent = () => {
  return (
    <>
      <div id="ReikiParentDiv" className="flex flex-col">

        <div id="ReikiSection1" className="mb- w-2/3 mx-auto mt-4"><img src={Flowers} /></div>

        <div id="ReikiSection2" className="mb-4 text-center mx-4">
          <h1 className="text-shadow-effect text-3xl">What is Reiki?</h1>
          <p className="mb-4 text-left">
            Reiki is a hands-on healing practice that uses qi to promote the body's natural ability to heal itself. Qi (or Chi) is the movement of energy within and around all living things. It stems from the palm of the hands to stimulate natural healing around the Aura and within the body to create connectedness with the Self. </p>
          <p className="mb-4 text-left">
            Anyone can embrace Reiki and receive many benefits that can enhance day to day living. For some Reiki will complement spiritual and personal growth; others will turn to it as a holistic approach to healing illnesses and physical ailments; and for all it will bring deep relaxation while relieving everyday stresses & anxieties.</p>
        </div>

        <div id="ReikiSection3" className="mb-4 text-center font-bold mx-[2em] text-md">
          <h1 className="text-shadow-effect text-3xl">Benefits of Reiki</h1>
          <p className="mb-4">Physical, Mental, Emotional
            & Spiritual Healing. </p>
          <p className="mb-4">Deep Relaxation,
            Rest, Revitalization.</p>
          <p className="mb-4">Relieves Stress &
            Reduces Anxiety.</p>
          <p className="mb-4">Releases Muscular Tension.</p>
          <p className="mb-4">Builds Clarity & Connection
            with the Self.</p>
          <p className="mb-4">Enhances Energy Flow through
            The Chakra System.</p>
          <p className="mb-4">Supports Expansion
            of Mindfulness,
            Balance & Harmony.</p>
          <p className="mb-4">Helps to Cleanse, Purify
            & Heal Past Traumas.</p>
        </div>

        <div id="ReikiSection4" className="mb-4 text-left mx-4">
          <p>
            When we are in touch with the Qi energy and break down the blockages in our Chakra System, we feel increasingly whole in ourselves & in the whole creation.</p>
        </div>

        <div id="ReikiSection5" className="mb-10 text-left w-1/4 mx-auto">
          <SmallSwirlyHand />
        </div>

      </div>

    </>
  );
};

export default Reiki;
