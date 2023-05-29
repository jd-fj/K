// YellowFlower.tsx
import { FunctionalComponent } from 'preact';
// import KitchyFlower from '../assets/KitchyFlower';
import SnowFall from './SnowFall';

const YellowFlower: FunctionalComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1>Yellow Flower</h1> */}
      {/* <KitchyFlower /> */}
      <SnowFall />
    </div>
  );
}

export default YellowFlower;
