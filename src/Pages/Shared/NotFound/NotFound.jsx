import React from 'react';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-409px)]">
      <div className="flex">
        <span className="border-r-2 pr-2 border-gray-600 text-3xl font-medium">
          404
        </span>
        <span className="mt-1 ml-2">Not Found</span>
      </div>
    </div>
  );
};

export default NotFound;
