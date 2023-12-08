import { FunctionComponent } from "preact";
import TwoDaisies from "../assets/two-daisies.png";

const Sessions: FunctionComponent = () => {
  return (
    <div id="ParentSessionsDiv" className="text-center mt-4 mx-auto lg:max-w-2xl">
      <div id="ChildDiv" className="mx-1">
        <h1 className="text-3xl" style={{
          textShadow: `
        1px 1px 0 #c9e094, 
        -1px -1px 0 #c9e094, 
        1px -1px 0 #c9e094, 
        -1px 1px 0 #c9e094,
        1px 0px 0 #c9e094, 
        0px 1px 0 #c9e094, 
        -1px 0px 0 #c9e094, 
        0px -1px 0 #c9e094
    `
        }}>
          <b className=" mb-1">Sessions</b>
        </h1>

        <h2 className="text-2xl text-left">
          <b>Reiki Healing</b>
        </h2>
        <p className="mx-6 leading-tight">
          Hands on Reiki Healing Sessions with a focus on Mindfulness, the
          Physical Body & Chakra Alignment.
        </p>
        <p className="text-xl mt-2">60 minute $120</p>
        <p className="text-xl mb-4">90 minute $165</p>

        <h2 className="text-2xl text-left">
          <b>Mindfulness Coaching</b>
        </h2>
        <p className="mx-6 leading-tight">
          One on One or Partner Sessions that may incorporate Breathwork,
          Meditation, Yoga Postures, learnings on Non-Violent Communication, the
          Chakra System </p>
          <p className="mx-6 leading-tight">& Crystal Connection.
        </p>
        <p className="text-xl mb-4 mt-2">60 minute $90</p>
        <p className="mx-6 mb-2 leading-tight">Sessions are held out of my home in the Renton Highlands.</p>
        <p className="mb-4 mx-6 leading-tight">
          To schedule, please send me a message {"☺︎"}
        </p>

        <h1 className="text-3xl mb-1" style={{
          textShadow: `
        1px 1px 0 #c9e094, 
        -1px -1px 0 #c9e094, 
        1px -1px 0 #c9e094, 
        -1px 1px 0 #c9e094,
        1px 0px 0 #c9e094, 
        0px 1px 0 #c9e094, 
        -1px 0px 0 #c9e094, 
        0px -1px 0 #c9e094
    `
        }}>
          <b>Contact</b>
        </h1>
        <p className="mx-6 leading-tight">Text if you have my number.</p>
        <p className="mx-6 leading-tight"> yellowflowerholistichealing@gmail.com </p>
        <p className="mx-6 mb-4 leading-tight">@yellowflowerholistichealing</p>
        <img className="mx-auto mb-4" src={TwoDaisies}/>
      </div>
    </div>
  );
};

export default Sessions;
