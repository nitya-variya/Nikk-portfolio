import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import about from '../assets/about_image.jpeg';
import topleftimg from '../assets/about-first.png';

const poses = {
  topLeft: about,
  topCenter: topleftimg,
  topRight: about,
  bottomLeft: about,
  bottomCenter: about,
  bottomRight: about
};

const gridKeys = [
  'topLeft', 'topCenter', 'topRight',
  'bottomLeft', 'bottomCenter', 'bottomRight'
];

export default function InteractiveGrid() {
  const [currentPose, setCurrentPose] = useState(poses.topCenter);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1, y: 0 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, }
    );
  }, []);

  return (
    <section className='personal_About_us'>
      <div className="react-grid-container">
        <div className="img_content_wrap">
        <h2 className="react-grid-heading">HELLOOO</h2>
        <div className="center_img_wrap">
          <img
            ref={imageRef}
            src={currentPose}
            alt="Center Pose"
            className="react-grid-center-image"
          />
        </div>
        </div>

        <div className="react-grid-overlay">
          {gridKeys.map((key, index) => (
            <div
              key={index}
              onMouseEnter={() => setCurrentPose(poses[key])}
              onMouseLeave={() => setCurrentPose(poses.topCenter)}
              className="react-grid-box"
            />
          ))}
        </div>
      </div>
      <div className="wtrn_perosnal_info container">
        <p>Built on passion, late nights, and endless tabs.
          Just a 20-year-old with big dreams and messy code.
          No degree. Just discipline.
          Made my own path — pixel by pixel.
          Love bold type, black themes, and stories that move.
          2+ years in design.
          1 brain.
          Too many ideas.
          Always designing.
          Always dreaming.
          It feels so good to create.
          A digital mind on display.</p>
          <a href="#" className="Wtrn_btn"><div>Find Me</div></a>
      </div>
    </section>
  );
}
