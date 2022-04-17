import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ id, name, price, description, image, left }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-16 md:gap-0 items-center w-9/12 md:w-auto mx-auto mb-20 md:mb-0 pb-10 md:pb-0 shadow md:shadow-none ${
        left ? '' : 'md:flex-row-reverse'
      }`}
    >
      <img className="md:w-[50%] rounded" src={image} alt="" />
      <div className="mx-16">
        <h1 className="text-3xl font-medium mb-6">{name}</h1>
        <p className="mb-8">{description}</p>
        <Link
          to={`/checkout/${id}`}
          className="border px-16 py-2 mt-8 rounded bg-gray-900 hover:bg-gray-800 transition duration-300 text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Service;
