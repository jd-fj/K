import { FunctionComponent } from 'preact';
import Mush from '../assets/Mush';

const Film: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Film</h1>
      <div className="grid grid-cols-3 gap-0 w-full max-w-screen-md mx-auto">
        {Array(9).fill(<Mush className="w-full h-auto" />)}
      </div>
    </div>
  );
}

export default Film;