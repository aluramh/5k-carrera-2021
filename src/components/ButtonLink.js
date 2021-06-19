import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const ButtonLink = ({ children, className = '', size, href = '#' }) => {
  return (
    <a
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        hover:text-black
        rounded
        text-gray-800
    `}
      href={href}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
