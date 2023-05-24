import './app.css'

import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Home from './components/home'
import About from './components/about'
import NavBar from './components/NavBar';

export function App() {
  return (
    <>
      <NavBar />

      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </>
  )
}
