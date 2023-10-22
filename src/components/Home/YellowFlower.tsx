// YellowFlower.tsx
import { FunctionalComponent } from "preact";
import SwirlyHand from "../../assets/SwirlyHand";
import './YellowFlower.css'

const YellowFlower: FunctionalComponent = () => {
  return (
    <div className="h-1/4 w-1/4">
      <div id="homepage" className="">
        <SwirlyHand/>
      </div>
    </div>
  );
};

export default YellowFlower;
