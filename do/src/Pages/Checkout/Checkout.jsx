import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useServices from '../../Hooks/useServices';
import FormError from '../Shared/FormError/FormError';

const Checkout = () => {
  const { id } = useParams();
  const [services] = useServices();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [service, setService] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const selectedService = services?.filter((service) => service.id === id);
    selectedService ? setService(...selectedService) : setService(null);
  }, [id, services]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmit(true);
  // };
  const onSubmit = () => {
    setSubmit(true);
    // console.log(errors);
  };

  return submit ? (
    <div className="min-h-[calc(100vh-409px)] flex justify-center items-center text-3xl font-medium">
      Thank you for the booking.
    </div>
  ) : (
    <div className="min-h-[calc(100vh-409px)] flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-32 mb-20">
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

      <form
        className="md:border-l md:pl-8"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h1 className="text-2xl font-medium pb-4">Checkout Now!</h1>
        <div className="mb-6">
          <input
            placeholder="Full Name"
            className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
            {...register('name', {
              required: 'Name is required.',
              minLength: {
                value: 3,
                message: 'Name must be atleast 3 characters.',
              },
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: 'Only alphabets are accepted',
              },
            })}
          />
          <FormError error={errors?.name?.message} />
        </div>

        <div className="mb-6">
          <input
            placeholder="Email"
            className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address',
              },
            })}
          />
          <FormError error={errors?.email?.message} />
        </div>

        <div className="mb-6">
          <input
            placeholder="11 digit phone number"
            className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
            {...register('phone', {
              required: 'Phone is required.',
              minLength: {
                value: 11,
                message: 'Please enter a 11 digit phone number.',
              },
              maxLength: {
                value: 11,
                message: 'Please enter a 11 digit phone number.',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only digits are accepted',
              },
            })}
          />
          <FormError error={errors?.phone?.message} />
        </div>

        <div className="mb-6">
          <input
            placeholder="Address"
            className="shadow-sm border text-sm rounded block w-[250px] md:w-[350px] p-2"
            {...register('address', {
              required: 'Address is required.',
              minLength: {
                value: 4,
                message: 'Atleast 4 characters.',
              },
            })}
          />
          <FormError error={errors?.address?.message} />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="border py-2 mt-8 rounded bg-gray-900 hover:bg-gray-800 transition duration-350 text-white text-center block w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Checkout;
