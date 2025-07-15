import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./compo/Navbar";
import Herobanner from "./compo/Herobanner";  
import About from "./compo/About";
import Loader from "./compo/Loader";
import useLenis from './compo/Smoothscroll';

function App() {
  useLenis();
  
  const [loading, setLoading] = useState(true);


  return (
    <>
      <Navbar />
      <Herobanner />
      <About />
      {loading && <Loader onComplete={() => setLoading(false)} />}
    </>
  );
}

export default App;
