import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-2 mt-4"> {/* Reduced top margin */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Carbify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;