import useServices from '../../../../Hooks/useServices';

import Service from '../Service/Service';

const Services = () => {
  const [services] = useServices();

  return (
    <div id="services" className="min-h-[80vh]">
      <h1 className="text-center text-3xl pt-14 mt-14 mb-10">Services</h1>
      {services?.map((service) => (
        <Service
          key={service.id}
          left={service.id % 2 === 1 ? true : false}
          {...service}
        />
      ))}
    </div>
  );
};

export default Services;
