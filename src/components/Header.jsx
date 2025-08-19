import { Link } from 'react-router-dom';
import Lightning from '../assets/Lightning/Lightning';

const Header = () => {
  return (
    <>
      {/* Header with Lightning Effect */}
      <header className="relative h-40 w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Lightning 
            hue={600}
            speed={0.5}
            intensity={1}
            size={1}
          />
        </div>
        
        {/* top header - centered vertically */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                MDVentures
              </Link>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@mdventures.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

   
    </>
  );
};

export default Header;