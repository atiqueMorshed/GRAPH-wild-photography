import React from 'react';
import spinner from '../../../Spinner.svg';

const LoadingSpinner = ({ notFullHeight }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        notFullHeight ? '' : 'h-screen'
      }`}
    >
      <img src={spinner} alt="" />
    </div>
  );
};

export default LoadingSpinner;
