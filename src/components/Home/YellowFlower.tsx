// YellowFlower.tsx
import { FunctionalComponent } from 'preact';
import { useFairyDustCursor } from '../../cursor/useFairyDustCursor';
import SnowFall from './SnowFall';

const YellowFlower: FunctionalComponent = () => {
  useFairyDustCursor({
     colors: [
    '#d4aa20', 
  ]});
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SnowFall />
    </div>
  );
}

export default YellowFlower;
