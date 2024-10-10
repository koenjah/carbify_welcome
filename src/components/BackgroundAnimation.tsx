import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-5">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 40 + 10}
              fill={i % 2 === 0 ? '#014421' : '#32CD32'}
              opacity="0.7"
            >
              <animate
                attributeName="cx"
                from={Math.random() * 100 + '%'}
                to={Math.random() * 100 + '%'}
                dur={Math.random() * 40 + 30 + 's'}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from={Math.random() * 100 + '%'}
                to={Math.random() * 100 + '%'}
                dur={Math.random() * 40 + 30 + 's'}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={(Math.random() * 40 + 10) + ';' + (Math.random() * 60 + 20) + ';' + (Math.random() * 40 + 10)}
                dur={Math.random() * 15 + 15 + 's'}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BackgroundAnimation;