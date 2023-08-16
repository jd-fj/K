// app.tsx
import "./app.css";

import NavBar from "./components/NavBar/DadBar";
import Router from "preact-router";
import YellowFlower from "./components/Home/YellowFlower";
import About from "./components/About/About";
import Film from "./components/Film";
import Reiki from "./components/Reiki";
import Sessions from "./components/Sessions";
import Palette from "./components/Palette/Palette";
import { useFairyDustCursor } from "./cursor/useFairyDustCursor";
// import Mush from './assets/mush'

export function App() {
  useFairyDustCursor({
     colors: [
    '#d4aa20', 
    '#e2b933'
  ]});
  return (
    <>
      <NavBar />

        <Router>
          <YellowFlower default path="/" />
          <About path="/about" />
          <Film path="/film" />
          <Reiki path="/reiki" />
          <Sessions path="/sessions" />
          <Palette path="/palette" />
        </Router>
    </>
  );
}
