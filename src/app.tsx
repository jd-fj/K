import { useState } from 'preact/hooks'
import smallFrown from './assets/smallFrown.svg'
import tammy from './assets/tammy.svg' // this is the normal svg
import Tammy from './assets/Tammy' // this is the component svg
import './app.css'


type LogoLinkProps = {
  href: string;
  imgSrc: string;
  alt: string;
  className: string;
};

function LogoLink({ href, imgSrc, alt, className }: LogoLinkProps) {
  return (
    <a href={href} target="_blank">
      <img src={imgSrc} className={className} alt={alt} />
    </a>
  );
}

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center">
        <LogoLink
          href="https://vitejs.dev"
          imgSrc={tammy}
          className="logo tammy"
          alt="tammy logo"
        />
        <LogoLink
          href="https://preactjs.com"
          imgSrc={smallFrown}
          className="logo frowny"
          alt="frowny logo"
        />
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <Tammy /> {count}
        </button>
        <p>
          Editing <code>src/app.tsx</code> and saving shows Vite's HMR (hot module reload)
        </p>
      </div>
      <p className="text-red-600">
        THIS TEXT IS READ BECAUSE TAILWIND
      </p>
    </>
  )
}
