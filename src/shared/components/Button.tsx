import React from 'react';

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void;     
  className?: string;        
  type?: 'button' | 'submit'; 
  disabled?: boolean;     
}

export const Button = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  
    // default class 
  const baseClasses = 'font-bold py-2 px-4 rounded transition-colors duration-300';
  
    // additional classes for different states
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;