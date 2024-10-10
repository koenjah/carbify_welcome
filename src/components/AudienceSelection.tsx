import React from 'react';
import { Briefcase, Users } from 'lucide-react';

interface AudienceSelectionProps {
  onSelect: (audience: string) => void;
}

const AudienceSelection: React.FC<AudienceSelectionProps> = ({ onSelect }) => {
  return (
    <div className="text-center mt-14 mb-20 fade-in"> {/* Reduced top margin by 10px */}
      <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        <button
          onClick={() => onSelect('business')}
          className="btn btn-primary flex items-center justify-center group hover-lift custom-radius text-xl py-6 px-10 text-[1.05em] hover:bg-white hover:text-primary" // Increased text size by 5% and added hover styles
          aria-label="Carbon Offsetting Solutions for Business"
        >
          <Briefcase className="w-8 h-8 mr-4" />
          <span>Business Solutions</span>
        </button>
        <button
          onClick={() => onSelect('crypto')}
          className="btn btn-secondary flex items-center justify-center group hover-lift custom-radius text-xl py-6 px-10 text-[1.05em]" // Increased text size by 5%
          aria-label="Crypto and Blockchain Opportunities"
        >
          <Users className="w-8 h-8 mr-4" />
          <span>Community</span>
        </button>
      </div>
    </div>
  );
};

export default AudienceSelection;