import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Bg_animation from './Bg_animation';

const Herobanner = () => {
  const textRef = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
  
    // Split into words
    splitInstance.current = new SplitType(textRef.current, { types: 'words' });
  
    const words = textRef.current.querySelectorAll('.word');
  
    // Initial state: below and invisible
    gsap.set(words, {
      y: 200,          
      opacity: 0,
    });
  
    // Animate in
    gsap.to(words, {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      delay: 0,
      duration: 0.2,
      ease: 'power3.out',
    });
  
    return () => {
      splitInstance.current?.revert();
    };
  }, []);
  

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }} className="hero-main">
      <Bg_animation />
      <div className="hero-banner" style={{ position: 'absolute', zIndex: 12 }}>
        <div className="container">
          <span className="Bedge_part">Frontend Master</span>
          <h1 className="Wtrn_title" ref={textRef}>
            Designs That Speak <br /> Code That Performs.
          </h1>
          <p className="Wtrn_subtitle">
            Not just how it looks — how it feels, works, and lasts.
          </p>
          <a href="#" className="Wtrn_btn">
            <div>Explore Projects</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
