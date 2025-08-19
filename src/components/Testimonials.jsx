import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import './Testimonials.css';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    { text: "Excellent workmanship and friendly staff. Will definitely hire again!", name: "Jane Doe", location: "Dallas, TX" },
    { text: "They arrived on time and fixed everything perfectly.", name: "John Smith", location: "Austin, TX" },
    { text: "Great service and professional team!", name: "Mary Johnson", location: "Houston, TX" },
    { text: "Very happy with the results, will recommend to friends.", name: "Mike Brown", location: "San Antonio, TX" },
    { text: "Affordable pricing and excellent quality work.", name: "Sarah Lee", location: "Plano, TX" },
    { text: "Quick response and efficient service.", name: "Chris Evans", location: "Fort Worth, TX" },
  ];

  const slides = useCallback(() => {
    const result = [];
    for (let i = 0; i < testimonials.length; i += isMobile ? 1 : 2) {
      result.push(testimonials.slice(i, i + (isMobile ? 1 : 2)));
    }
    return result;
  }, [testimonials, isMobile]);

  const goToSlide = useCallback((newIndex) => {
    if (isAnimating) return;
    
    const totalSlides = slides().length;
    if (!totalSlides) return;
    
    let nextIndex = newIndex;
    if (nextIndex >= totalSlides) nextIndex = 0;
    if (nextIndex < 0) nextIndex = totalSlides - 1;
    
    setIndex(nextIndex);
    setIsAnimating(true);
    
    const newPosition = `-${nextIndex * 100}%`;
    
    if (sliderRef.current) {
      gsap.killTweensOf(sliderRef.current);
      gsap.to(sliderRef.current, {
        x: newPosition,
        duration: 0.5,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        onComplete: () => setIsAnimating(false),
        overwrite: 'auto'
      });
    }
  }, [isAnimating, slides]);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    
    if (!isHovered) {
      autoSlideInterval.current = setInterval(() => {
        const totalSlides = slides().length;
        if (!totalSlides) return;
        
        setIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % totalSlides;
          goToSlide(nextIndex);
          return nextIndex;
        });
      }, 5000);
    }
  }, [isHovered, goToSlide, slides]);

  const stopAutoSlide = useCallback(() => {
    clearInterval(autoSlideInterval.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      const totalSlides = slides().length;
      if (!totalSlides) return;
      
      const newPosition = `-${index * (100 / totalSlides)}%`;
      
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { x: newPosition });
      }
    };
    
    const debouncedResize = debounce(handleResize, 100);
    handleResize();
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      debouncedResize.cancel?.();
    };
  }, [index, slides]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  function debounce(func, wait) {
    let timeout;
    
    const debounced = function(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
    
    debounced.cancel = function() {
      clearTimeout(timeout);
    };
    
    return debounced;
  }

  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div 
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          className="nav-button prev-button"
          onClick={() => goToSlide(index - 1)}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        
        <div 
          className="slider-track"
          ref={sliderRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides().map((slideGroup, slideIndex) => (
            <div key={slideIndex} className="slide">
              {slideGroup.map((testimonial, idx) => (
                <div key={idx} className="testimonial-card">
                  <FaQuoteLeft className="quote-icon" />
                  <FaQuoteLeft className="quote-icon-bottom" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map(star => (
                          <FaStar key={star} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button 
          className="nav-button next-button"
          onClick={() => goToSlide(index + 1)}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="dots-container">
        {slides().map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="review-button">Leave us a review</button>
      </div>

      <div className='trapezoid'>

      <div className="projects-head">
            <h2>Recent Projects</h2>
          </div>
      </div>

    </section>
  );
};

export default Testimonials;