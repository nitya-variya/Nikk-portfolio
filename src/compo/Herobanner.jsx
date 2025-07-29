import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Bg_animation from "./Bg_animation";

const Herobanner = () => {
  useEffect(() => {
    const title = document.querySelector('.Wtrn_title');
    const subtitle = document.querySelector('.Wtrn_subtitle');
    const btn = document.querySelector('.Wtrn_btn');

    gsap.to([title, subtitle], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.to(btn, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.4,
      ease: "power2.out"
    });
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden" }} className="hero-main">
      <Bg_animation />    
      <div className="hero-banner" style={{ position: "absolute", zIndex: 12 }}>
        <div className="container">
          <span className='Bedge_part'>Frontend Master</span>
          <h1 className="Wtrn_title">Designs That Speak <br /> Code That Performs.</h1>    
          <p className="Wtrn_subtitle">Not just how it looks — how it feels, works, and lasts.</p>
          <a href="#" className="Wtrn_btn"><div>Explore Projects</div></a>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
