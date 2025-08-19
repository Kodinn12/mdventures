import React from 'react';
// import Content from '../components/Content';

const About = () => {
  return (
    
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Welcome to MDVentures, where innovation meets excellence. Founded in 2023, we are dedicated to 
              creating amazing digital experiences using cutting-edge technologies like React and Vite.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to build high-quality, performant web applications that solve real-world problems 
              while providing an exceptional user experience.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'John Doe', role: 'Founder & CEO', bio: 'Passionate about building great products.' },
                { name: 'Jane Smith', role: 'Lead Developer', bio: 'Loves React and open source.' },
                { name: 'Mike Johnson', role: 'UI/UX Designer', bio: 'Creates beautiful user experiences.' },
                { name: 'Sarah Williams', role: 'Marketing', bio: 'Spreads the word about our work.' },
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-700">{member.name}</h3>
                  <p className="text-indigo-500 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};

export default About;
