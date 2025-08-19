const Footer = () => {
    return (
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MDVentures. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;