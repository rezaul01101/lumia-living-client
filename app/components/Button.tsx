import React from 'react';
interface ButtonProps {
  text: string;
  type?: 'fill'; 
}

// Use the ButtonProps interface to type the component's props
const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button className={`${(type=='fill')?'bg-lumiaPrimary-600 text-white':'border border-lumiaPrimary-600 hover:text-white text-lumiaPrimary-600'} hover:bg-green-700  font-bold sm:py-3 py-2 sm:px-10 px-5 rounded-full`}>
      {text}
    </button>
  );
};

export default Button;
