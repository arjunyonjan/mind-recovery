import React from 'react';

interface FlagProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const NepalFlag: React.FC<FlagProps> = ({ 
  className = '', 
  width = '100%', 
  height = '100%' 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 726 885" 
      width={width} 
      height={height}
      className={className}
      aria-label="Flag of Nepal"
    >
      <path d="M0 0v885h492L179 487h347L0 0z" fill="#003893"/>
      <path d="M12 28v829h432L173 499h297L12 28z" fill="#dc143c"/>
      <g fill="#fff">
        <path d="M136 295a78 78 0 0 1-52-132 87 87 0 1 0 120 124 77 77 0 0 1-68 8z"/>
        <path d="M110 206a135 135 0 0 1 53-8l-15-11-2 19m11-18l11 15-19-2 8-13m-23 2l5 18-9-17 4-1m34 11l-5 18-5-18 10 0m-46 16l15 11-19 3 4-14m49 2l-14 12 14-14 0 2m-57 23l18 3-17 9-1-12m61 9l-18 4 11-16 7 12m-63 27l19-5-11 16-8-11m61 17l-19-6 4-19 15 25m-59 30l17-10-5 18-12-8m51 22l-16-12-3 19 19-7m-45 28l12-14 2 19-14-5m35 23l-12-15-11 15 23 0m-24 16l4-19 8 17-12 2m12 3l-5-18 17 9-12 9"/>
      </g>
      <polygon 
        points="136 579 146 597 127 591 141 605 122 609 141 615 127 629 146 623 136 641 152 626 149 646 160 629 164 649 171 631 180 648 181 629 196 642 192 623 210 629 197 615 215 609 197 605 210 591 192 597 196 579 181 592 180 573 171 590 164 572 160 592 149 575 152 595" 
        fill="#fff"
      />
    </svg>
  );
};

export default NepalFlag;
