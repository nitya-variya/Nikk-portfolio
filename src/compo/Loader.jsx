import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const greetings = ["Namaste", "Hola", "Bonjour","Olá", "Hello", "こんにちは"];

const Loader = ({ onComplete }) => {
  const textsRef = useRef([]);
  const dotRef = useRef(null);
  const loaderRef = useRef(null);
  const barRef = useRef(null);
  const glowRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    const barWidth = () => barRef.current?.offsetWidth || 0;

    // Animate text stack
    greetings.forEach((_, i) => {
      tl.to(textsRef.current[i], {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }).to(textsRef.current[i], {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power2.in",
      });
    });

    // Dot and glow-bar move together
    const progressDuration = greetings.length * 0.5;

    // Animate dot movement
    const dotTween = gsap.to(dotRef.current, {
      x: barWidth,
      duration: progressDuration,
      ease: "power2.inOut",
    });

    // Animate glow-bar width
    const glowTween = gsap.fromTo(
      glowRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: progressDuration,
        ease: "power2.inOut",
      }
    );

    // Add both animations at the same time
    tl.add([dotTween, glowTween], 0);

    // Dot expands to fill screen
    tl.to(dotRef.current, {
      scale: 150,
      backgroundColor: "#000",
      duration: 0.99,
      rotation: 90,
      yoyo: true,
      ease: "slow(0.7,0.7,false)",
    });

    // Fade out loader
    tl.to(loaderRef.current, {
      transform: "translateY(-100%)",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",

      onComplete: () => {
        loaderRef.current.style.transform = "translateY(0)";
      },
    });
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader_inner_wrap">
        <div className="text-container">
          {greetings.map((text, i) => (
            <span
              key={i}
              ref={(el) => (textsRef.current[i] = el)}
              className="loader-text"
            >
              {text}
            </span>
          ))}
        </div>

        <div className="progress-track" ref={barRef}>
          <div className="glow-bar" ref={glowRef} />
          <div className="dot" ref={dotRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
