import React, { useEffect, useState } from 'react';

interface HeaderProps {
  selectedAudience: string | null;
}

const Header: React.FC<HeaderProps> = ({ selectedAudience }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (selectedAudience) {
      setTimeout(() => setIsAnimated(true), 100);
    } else {
      setIsAnimated(false);
    }
  }, [selectedAudience]);

  return (
    <header className={`text-center transition-all duration-700 ease-in-out ${isAnimated ? 'transform -translate-y-4 scale-95' : ''}`}>
      <div className="bg-primary p-2">
        <img 
          src="https://business.carbify.io/wp-content/uploads/2024/09/Logo-rectangle-green-1-2048x820.png" 
          alt="Carbify Logo" 
          className="w-[338px] mx-auto mb-1 filter brightness-0 invert" // Increased size by 10% from previous 307px
        />
        <h1 className="text-xl text-white mt-1">
          {selectedAudience === 'business' 
            ? "Saving the planet should be profitable" 
            : selectedAudience === 'crypto'
            ? "Blockchain-powered transparency in carbon offsetting"
            : "Carbon Offsetting Done Right"}
        </h1>
      </div>
    </header>
  );
};

export default Header;