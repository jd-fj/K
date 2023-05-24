import './app.css'

import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Home from './components/home'
import About from './components/about'

export function App() {
  return (
    <>
      <nav>
        <Link activeClassName="active" href="/">Home</Link>
        <Link activeClassName="active" href="/about">About</Link>
      </nav>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </>
  )
}
