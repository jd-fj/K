// Film.tsx
import { FunctionComponent } from 'preact';
import Mush from '../assets/mush';

const Film: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Film</h1>
      <Mush />
    </div>
  );
}

export default Film;
