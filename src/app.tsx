// app.tsx
import './app.css'

import Router from 'preact-router';
import YellowFlower from './components/Home/YellowFlower';
import About from './components/About';
import NavBar from './components/NavBar/NavBar';
import Film from './components/Film';
import Reiki from './components/Reiki';
import Sessions from './components/Sessions';
import Palette from './components/Palette/Palette';
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
        <Sessions path="K/sessions" />
        <Palette path="K/palette" />
      </Router> 
    </>
  )
}
