// app.tsx
import './app.css'

// import Router from 'preact-router';
// import Home from './components/home';
// import About from './components/about';
import NavBar from './components/NavBar';
import LemonDrop from './components/LemonDrop';

export function App() {
  return (
    <>
      <NavBar />
      {/* <Router>
        <Home default path="/" />
        <About path="/about" />
      </Router> */}
      <LemonDrop/>
    </>
  )
}
