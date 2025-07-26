import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./compo/Navbar";
import Herobanner from "./compo/Herobanner";  
import About from "./compo/About";
import Loader from "./compo/Loader";
import useLenis from './compo/Smoothscroll';
import Projects from "./compo/Projects";

function App() {
  useLenis();
  
  const [loading, setLoading] = useState(true);


  return (
    <>
      <Navbar />
      <Herobanner />
      <About />
      <Projects />
      {loading && <Loader onComplete={() => setLoading(false)} />}
    </>
  );
}

export default App;
