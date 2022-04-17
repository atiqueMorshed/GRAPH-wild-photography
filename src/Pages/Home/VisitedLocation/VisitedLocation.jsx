import React from 'react';

const VisitedLocation = ({ region, image, date }) => {
  return (
    <div className="flex mx-auto max-w-[90%]">
      <div className="flex flex-col items-center shadow-lg rounded-md border pb-7">
        <img className="" src={image} alt="" />
        <div className="mt-3">
          <p className="text-2xl font-medium text-center pb-4">{region}</p>
          <p className="text-center pb-4 mb-3 font-semibold">Visited: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default VisitedLocation;
