import React from 'react';

import useVisitedLocations from '../../../Hooks/useVisitedLocations';
import VisitedLocation from '../VisitedLocation/VisitedLocation';

const LastVisitedLocations = () => {
  const [reviews] = useVisitedLocations();
  return (
    <div className="mt-28">
      <h1 className="text-center text-3xl pt-14 mt-14 mb-20">
        Last Visited Locations
      </h1>

      <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews?.map((review) => (
          <VisitedLocation key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default LastVisitedLocations;
