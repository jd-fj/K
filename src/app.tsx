// app.tsx
import './app.css'

import Router from 'preact-router';
import YellowFlower from './components/YellowFlower';
import About from './components/about';
import NavBar from './components/NavBar';
import Film from './components/Film';
import Reiki from './components/Reiki';
import Vintage from './components/Vintage';
// import Mush from './assets/mush'


export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <YellowFlower default path="/" />
        <About path="/about" />
        <Film path="/film" />
        <Reiki path="/reiki" />
        <Vintage path="/vintage" />
      </Router> 
      {/* <Mush />
      {/* <KitchyFlower /> */}
    </>
  )
}
