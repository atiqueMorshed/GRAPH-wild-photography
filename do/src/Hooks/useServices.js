import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await fetch('/services.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const data = await result.json();
        setServices(data);
      } catch (error) {
        setServices(null);
      }
    };
    fetchServices();
  }, []);

  return [services, setServices];
};

export default useServices;
