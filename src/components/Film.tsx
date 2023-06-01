// Film.tsx
import { FunctionComponent } from 'preact';
import Mush from '../assets/mush';

const Film: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Film</h1>
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        {Array(9).fill(<Mush />)}
      </div>
    </div>
  );
}

export default Film;
