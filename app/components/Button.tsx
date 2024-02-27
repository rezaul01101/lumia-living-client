import React from 'react';
interface ButtonProps {
  text: string;
  type?: 'fill'; 
}

// Use the ButtonProps interface to type the component's props
const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button className={`${(type=='fill')?'bg-[#689a37] text-white':'border border-[#689a37] hover:text-white text-[#689a37]'} hover:bg-green-700  font-bold sm:py-3 py-2 sm:px-10 px-5 rounded-full`}>
      {text}
    </button>
  );
};

export default Button;
