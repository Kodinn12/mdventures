// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import DynamicContent from '../components/DynamicContent';
import Testimonials from "../components/Testimonials"; // adjust path if needed

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-section">
        {/* Background Image */}
        <div className="hero-bg"></div>
        
        {/* Navigation Bar */}
        <div className="nav-container">
          
            <nav className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          
        </div>
        
        {/* Hero Content */}
        <div className="hero-content">
          <DynamicContent />
        </div>
        
        {/* Bottom Left Corner */}
        <div className="bottom-left-content">
        </div>
        
        {/* Bottom Right Corner */}
        <div className="bottom-right-content">
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h4>OUR PROMISE AND VALUES</h4>
        <h2>Committed To Superior Electrical Services</h2>

        <div className="features-grid">
          <div className="feature-card">
            <img src="lightbulb-icon.png" alt="Idea" />
            <p>We are proud of our legacy and the relationship we have built with our community.</p>
          </div>

          <div className="feature-card">
            <img src="family-icon.png" alt="Family" />
            <p>A family owned and operated business since 1976, passing down the company through three generations.</p>
          </div>

          <div className="feature-card">
            <img src="worker-icon.png" alt="Worker" />
            <p>Trust our skilled team for honesty, quality workmanship, teamwork, safety and dependability.</p>
          </div>
        </div>
      </section>
     
       <Testimonials />

      {/* Projects Section */}
      <section className="projects-section">
 <div className="projects-container">
          <div className="projects-header">
            
            <p>Join thousands of satisfied users today.</p>
          </div> 
          
          <div className="projects-grid">
            {[
              { image: 'frisco-paintball.jpg', location: 'Frisco, TX', title: 'Frisco Paintball' },
              { image: 'sunbelt-pools.jpg', location: 'Dallas, TX', title: 'Sunbelt Pools' },
              { image: 'cibodivino.jpg', location: 'Dallas, TX', title: 'CiboDivino Marketplace' },
              { image: 'splash-dayz.jpg', location: 'White Settlement, TX', title: 'Splash Dayz Waterpark' }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-details">
                  <p className="project-location">{project.location}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <a href="#" className="project-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-sans py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="mb-8">
      <p className="text-sm uppercase tracking-widest text-gray-700">Book a Service Call</p>
      <h2 className="text-3xl font-bold text-red-600">Contact Us</h2>
    </div>

    {/* Form */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Enter your name" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <input type="email" placeholder="Enter your email address" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <input type="tel" placeholder="Enter your phone number" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <input type="text" placeholder="Enter your address" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <input type="text" placeholder="Enter your city" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
        <input type="text" placeholder="Enter your zip code" className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {/* Urgency */}
        <div>
          <p className="font-semibold mb-2">Urgency</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="urgency" value="Preventive Maintenance" className="text-red-500 focus:ring-red-500" /> Preventive Maintenance
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="urgency" value="Not Urgent" className="text-red-500 focus:ring-red-500" /> Not Urgent
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="urgency" value="Immediate" className="text-red-500 focus:ring-red-500" /> Immediate
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="urgency" value="Emergency" className="text-red-500 focus:ring-red-500" /> Emergency
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="urgency" value="Other" className="text-red-500 focus:ring-red-500" /> Other
            </label>
          </div>
        </div>

        {/* Message */}
        <textarea placeholder="Describe your problem or services needed" className="border border-gray-300 p-3 w-full h-24 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>

        {/* Submit Button */}
        <button type="submit" className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
          Submit
        </button>
      </div>
    </form>
  </div>
</section>


      <section className="bg-gray-100 py-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
    {/* Left Card */}
    <div className=" lastcard   bg-white shadow-lg p-6 border-t-4 border-red-600 flex-1">
      <img src="your-logo.png" alt="Puckett Electric" className="h-12 mb-6" />

      <div className="space-y-4 text-gray-700">
        <p className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414A6 6 0 1116.657 9.343L21 13.686V21h-7.314z" />
          </svg>
          2602 Industrial Ln Garland TX 75041
        </p>
        <p className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3.6 7.59a1 1 0 01-.36 1.31l-1.93 1.29A11.944 11.944 0 0012 21c4.97 0 9.19-3.03 11-7.29l-1.94-1.29a1 1 0 01-.36-1.31L19 5h2" />
          </svg>
          972-864-0020
        </p>
        <p className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4 4m-4-4l4-4" />
          </svg>
          puckett@puckettelectric.com
        </p>
      </div>
    </div>

    {/* About */}
    <div className="flex-1">
      <h3 className="font-bold mb-2">About</h3>
      <p className="text-gray-600">
        The Puckett family has provided expert and trustworthy electrical services to the DFW area since 1976.
        Whether you need help with new construction, a repair, or an electrical upgrade, we'll provide high quality work done quickly.
      </p>
    </div>

    {/* Find Us */}
    <div className="flex-1">
      <h3 className="font-bold mb-4">Find Us</h3>
      <div className="flex gap-2 mb-4">
        <a href="#" className="bg-black text-white p-2"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="bg-black text-white p-2"><i className="fab fa-youtube"></i></a>
        <a href="#" className="bg-black text-white p-2"><i className="fab fa-google"></i></a>
        <a href="#" className="bg-black text-white p-2"><i className="fab fa-yelp"></i></a>
      </div>
      <a href="#" className="text-red-600 font-bold underline">LEAVE US A REVIEW!</a>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;