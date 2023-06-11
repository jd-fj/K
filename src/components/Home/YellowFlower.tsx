import { FunctionalComponent } from 'preact';
import SnowFall from './SnowFall';
import { useFairyDustCursor } from '../../hooks/useFairyDustCursor';



const YellowFlower: FunctionalComponent = () => {
  useFairyDustCursor({ colors: ['#FFFF00', '#FFFC00', '#FFF900', '#FFF600', '#FFF300', '#FFF000', '#FFED00', '#FFEA00', '#FFE700', '#FFE400', '#FFE100', '#FFDE00', '#FFDB00', '#FFD800', '#FFD500', '#FFD200', '#FFCF00', '#FFCC00', '#FFC900', '#FFC600', '#FFC300', '#FFC000', '#FFBD00', '#FFBA00', '#FFB700', '#FFB400', '#FFB100', '#FFAE00', '#FFAB00', '#FFA800', '#FFA500', '#FFA200', '#FF9F00', '#FF9C00', '#FF9900', '#FF9600', '#FF9300', '#FF9000', '#FF8D00', '#FF8A00', '#FF8700', '#FF8400', '#FF8100', '#FF7E00', '#FF7B00', '#FF7800', '#FF7500', '#FF7200', '#FF6F00', '#FF6C00', '#FF6900', '#FF6600']
});
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1>Yellow Flower</h1> */}
      {/* <KitchyFlower /> */}
      <SnowFall />
    </div>
  );
}

export default YellowFlower;
