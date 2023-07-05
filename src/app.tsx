// app.tsx
import "./app.css";

import Router from "preact-router";
import YellowFlower from "./components/Home/YellowFlower";
import About from "./components/About";
import NavBar from "./components/NavBar/NavBar";
import Film from "./components/Film";
import Reiki from "./components/Reiki";
import Sessions from "./components/Sessions";
import Palette from "./components/Palette/Palette";
// import Mush from './assets/mush'

export function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex flex-grow items-center justify-center">
          <Router>
            <YellowFlower default path="/" />
            <About path="K/about" />
            <Film path="K/film" />
            <Reiki path="K/reiki" />
            <Sessions path="K/sessions" />
            <Palette path="K/palette" />
          </Router>
        </div>
      </div>
    </>
  );
}
