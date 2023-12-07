import { FunctionComponent } from "preact";

const Sessions: FunctionComponent = () => {
  return (
    <div id="ParentSessionsDiv" className="text-center mt-2">
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
          <b className="">Sessions</b>
        </h1>

        <h2 className="text-2xl text-left">
          <b>Reiki Healing</b>
        </h2>
        <p className="mx-6 leading-tight">
          Hands on Reiki Healing Sessions with a focus on Mindfulness, the
          Physical Body, and Chakra Alignment.
        </p>
        <p className="text-xl mt-2">60 minute $120</p>
        <p className="text-xl mb-4">90 minute $165</p>

        <h2 className="text-2xl text-left">
          <b>Mindfulness Coaching</b>
        </h2>
        <p className="mx-6 leading-tight">
          One on one or partner sessions that may incorporate Breathwork,
          Meditation, Yoga Postures, learnings on Non-Violent Communication, the
          Chakra System, and Crystal Connection.
        </p>
        <p className="text-xl mb-2 mt-2">60 minute $90</p>
        <p className="mx-6 leading-tight">redacted</p>
        <p className="mb-4 mx-6 leading-tight">
          To schedule, please send me a message of your preferred date(s),
          time(s), and type of session interested in ~
        </p>

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
          <b>Contact</b>
        </h1>
        <p className="mx-6 leading-tight">Text if you have my number. yellowflowerholistichealing@gmail.com
          @yellowflowerholistichealing</p>
      </div>
    </div>
  );
};

export default Sessions;
