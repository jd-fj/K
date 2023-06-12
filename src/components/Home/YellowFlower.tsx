// YellowFlower.tsx
import { FunctionalComponent } from 'preact';
import SnowFall from './SnowFall';
// import Cursor from './cursor';
import { useFairyDustCursor } from '../../hooks/useFairyDustCursor';

const YellowFlower: FunctionalComponent = () => {
  useFairyDustCursor({ colors: [
    '#FFEA00', '#ffef45', '#ffee31', '#fff04c', '#ffef44', '#fff371', '#ffee00',
    '#fef242', '#fffab1', '#fff891', '#ffe227', '#ffe851', '#ffee7e', '#fdf4b8',
    '#fff29f', '#fbe987', '#fff19f', '#f7e05f', '#fae35d', '#fbe35d', '#fdea7c',
    '#f6e063', '#ffe54f'
  ]
});
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Cursor /> */}
      <SnowFall />
    </div>
  );
}

export default YellowFlower;
