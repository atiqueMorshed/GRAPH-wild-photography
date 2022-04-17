import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const Checkout = () => {
  const { id } = useParams();
  const [services] = useServices();
  const [service, setService] = useState();

  useEffect(() => {
    const selectedService = services?.filter((service) => service.id === id);
    selectedService ? setService(...selectedService) : setService(null);
  }, [id, services]);

  return (
    <div className="min-h-[calc(100vh-409px)] flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 my-20">
      <div className="item flex justify-center items-center gap-4">
        <img
          className="w-[80px] md:w-[120px] rounded-full"
          src={service?.image}
          alt=""
        />
        <div className="">
          <p className="font-bold">{service?.price}$</p>
          <h1 className="font-medium">{service?.name}</h1>
        </div>
      </div>
      <form className="md:border-l md:pl-8">
        <h1 className="text-2xl font-medium pb-4">Checkout Now!</h1>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2"
            placeholder="mail@qmail.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium">
            Destination Address
          </label>
          <textarea
            id="address"
            className="shadow-sm border text-sm rounded block  w-[250px] md:w-[350px] p-2 pb-12"
            placeholder="Be as detailed as possible."
            required
            rows="2"
          ></textarea>
        </div>

        <Link
          to={`/success`}
          className="border py-2 mt-8 rounded bg-gray-900 hover:bg-gray-800 transition duration-350 text-white text-center block w-full"
        >
          Checkout
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
