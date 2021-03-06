import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Service = ({ id, name, price, description, image, left }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-16 md:gap-0 items-center w-9/12 md:w-auto mx-auto mb-20 md:mb-0 pb-10 md:pb-0 shadow md:shadow-none ${
        left ? '' : 'md:flex-row-reverse'
      }`}
    >
      <motion.img
        whileHover={{ scale: 1.02, opacity: 0.9 }}
        whileTap={{ scale: 0.97, opacity: 0.7 }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="rounded md:w-[50%]"
        src={image}
        alt=""
      />

      <div className="mx-16">
        <h1 className="font-bold text-xl mb-4">{price}$ for </h1>
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
