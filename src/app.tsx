// app.tsx
import "./app.css";

import NavBar from "./components/NavBar/NavBar";
import Router from "preact-router";
import YellowFlower from "./components/Home/YellowFlower";
import About from "./components/About/About";
import Reiki from "./components/Reiki";
import Sessions from "./components/Sessions/Sessions";
import Palette from "./components/Palette/Palette";
import Resources from "./components/Resources/Resources";
import { useFairyDustCursor } from "./cursor/useFairyDustCursor";

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
          <Reiki path="/reiki" />
          <Sessions path="/sessions" />
          {/* <Palette path="/palette" /> */}
          <Resources path="/resources" />
        </Router>
    </>
  );
}
