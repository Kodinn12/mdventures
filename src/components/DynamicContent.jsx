import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const contentData = [
  {
    title: 'Welcome to Our Platform',
    text: 'Discover amazing content and services tailored just for you.',
  },
  {
    title: 'Innovative Solutions',
    text: 'Experience cutting-edge technology and creative solutions.',
  },
  {
    title: 'Join Our Community',
    text: 'Become part of our growing network of professionals.',
  },
];

const DynamicContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );

    // Auto-rotate content
    const interval = setInterval(() => {
      // Fade out
      gsap.to([titleRef.current, textRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          // Update content
          setCurrentIndex((prev) => (prev + 1) % contentData.length);
          
          // Fade in new content
          gsap.to([titleRef.current, textRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { title, text } = contentData[currentIndex];

  return (
    <div className="hero-content">
      <h1 ref={titleRef} className="hero-title">
        {title}
      </h1>
      <p ref={textRef} className="hero-description">
        {text}
      </p>
      <Link 
        to="/about" 
        className="hero-button"
      >
        Learn More
      </Link>
    </div>
  );
};

export default DynamicContent;