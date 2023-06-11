// app.tsx
import './app.css'

import Router from 'preact-router';
import YellowFlower from './components/Home/YellowFlower';
import About from './components/About';
import NavBar from './components/NavBar';
import Film from './components/Film';
import Reiki from './components/Reiki';
import Vintage from './components/Vintage';
import Palette from './components/Palette';
// import Mush from './assets/mush'

export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <YellowFlower default path="/" />
        <About path="K/about" />
        <Film path="K/film" />
        <Reiki path="K/reiki" />
        <Vintage path="K/vintage" />
        <Palette path="K/palette" />
      </Router> 
      {/* <Mush /> */}
      {/* <KitchyFlower /> */}
    </>
  )
}
