import Image from 'next/image';
import React from 'react';

type buttonProps = {
  type: 'button' | 'submit';
  label: string;
  color: 'Yellow' | 'Blue' | 'Outline';
  icon?: string;
  size: 'Base' | 'Small';
  onClick?: () => void;
  socialUrl?: string; 
};

const Button = ({
  type,
  label,
  color,
  icon,
  size,
  onClick,
  socialUrl,
}: buttonProps) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        color === 'Yellow'
          ? 'bg-[#F2B124] destkop-md font-medium text-white'
          : color === 'Blue'
          ? 'bg-[#1E386B] destkop-sm font-semibold text-white'
          : color === 'Outline'
          ? 'border-solid border-[1px] border-[#BBC9E8] destkop-sm font-semibold'
          : ''
      } ${size === 'Base' ? 'px-6 py-4' : 'px-3 py-2'} rounded flex items-center gap-[4px]`}
    >
      {icon && <Image className='rounded-full' src={icon} alt={label} width={16} height={16} />}
      {label}
    </button>
  );
};

export default Button;