// YellowFlower.tsx
import { FunctionalComponent } from "preact";
import SwirlyHand from "../../assets/SwirlyHand";
import "./YellowFlower.css";

const YellowFlower: FunctionalComponent = () => {
  return (
    <div className="flex justify-center m-5 ">
      <div id="homepage" className="sm:h-1/4 sm:w-1/4 h-3/4 w-3/4 mr-4 mt-10 lg:mt-0">
        <SwirlyHand />
      </div>
    </div>
  );
};

export default YellowFlower;
