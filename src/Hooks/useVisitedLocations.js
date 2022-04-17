import { useEffect, useState } from 'react';

const useVisitedLocations = () => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await fetch('/locations.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const data = await result.json();
        setLocations(data);
      } catch (error) {
        setLocations(null);
      }
    };
    fetchServices();
  }, []);

  return [locations, setLocations];
};

export default useVisitedLocations;
