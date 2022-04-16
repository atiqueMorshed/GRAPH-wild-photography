import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`py-4 px-4 hover:text-navy-300 border-b border-gray-300 border-dashed w-full text-center md:border-0 ${
        match ? 'text-blue-300' : ''
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
