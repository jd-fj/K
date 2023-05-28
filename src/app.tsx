// app.tsx
import './app.css'

import Router from 'preact-router';
import Home from './components/home';
import About from './components/about';
import NavBar from './components/NavBar';
import Cute from './components/Cute';
import Reiki from './components/Reiki';
import Vintage from './components/Vintage';
// import Mush from './assets/mush'


export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home default path="/" />
        <About path="/about" />
        <Cute path="/cute" />
        <Reiki path="/reiki" />
        <Vintage path="/vintage" />
      </Router> 
      {/* <Mush />
      {/* <KitchyFlower /> */}
    </>
  )
}
