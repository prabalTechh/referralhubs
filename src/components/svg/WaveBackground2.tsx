import React from 'react';

interface WaveBackground2Props {
  className?: string;
}

const WaveBackground2: React.FC<WaveBackground2Props> = ({ className }) => {
  return (
    <svg 
      width="1440" 
      height="452" 
      viewBox="0 0 1440 452" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M-1 397.997C129.254 453.548 220.379 463.406 359.5 436.997C519.764 406.575 720 225.997 720 225.997C720 225.997 920.236 45.4197 1080.5 14.9974C1219.62 -11.4115 1310.75 -1.55335 1441 53.9974" 
        stroke="#305AFF" 
        strokeOpacity="0.65" 
        strokeDasharray="6 6"
      />
    </svg>
  );
};

export default WaveBackground2; 