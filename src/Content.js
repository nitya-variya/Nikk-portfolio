import project1 from './assets/portfolio_1.png';
import project2 from './assets/portfolio_2.png'; // Optional if you want second one too

const portfolioContent = [
  {
    id: 1,
    title: "Modern Landing Page",
    description: "A clean and responsive SaaS landing page built with React, Tailwind CSS, and smooth scroll animations.",
    image: project1,
    link: "https://yourproject1.com",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "A complete e-commerce platform with product filters, cart, wishlist, and Razorpay payment integration.",
    image: project2, // optional or leave "" if not available
    link: "https://yourproject2.com",
    tech: ["HTML", "CSS", "JavaScript", "Razorpay"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Interactive personal portfolio featuring GSAP animations, Three.js shaders, and responsive layout.",
    image: "project2", // add image if available
    link: "https://yourproject3.com",
    tech: ["React", "GSAP", "Three.js"]
  }
];

export default portfolioContent;
