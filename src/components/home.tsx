// home.tsx
import { FunctionComponent } from 'preact';
import KitchyFlower from '../assets/KitchyFlower';

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Home</h1>
      <KitchyFlower />
    </div>
  );
}

export default Home;
