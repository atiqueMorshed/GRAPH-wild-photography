import React from 'react';
import Banner from '../Banner/Banner';
import LastVisitedLocations from '../LastVisitedLocations/LastVisitedLocations';
import Services from '../Services/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <LastVisitedLocations />
    </div>
  );
};

export default Home;
