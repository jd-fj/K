// Reiki.tsx
import { FunctionComponent } from "preact";

const Reiki: FunctionComponent = () => {
  return (
    <>
      <div id="ReikiParentDiv" className="flex flex-col w-full">

        <div id="ReikiSection1" className="mb-4 text-left">section1</div>
        <div id="ReikiSection2" className="mb-4 text-left">section2</div>
        <div id="ReikiSection3" className="mb-4 text-center">section3</div>
        <div id="ReikiSection4" className="mb-4 text-left">section4</div>
        <div id="ReikiSection5" className="mb-4 text-left">section5</div>

      </div>

    </>
  );
};

export default Reiki;
