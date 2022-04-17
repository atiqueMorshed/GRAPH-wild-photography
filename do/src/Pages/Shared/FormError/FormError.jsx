import React from 'react';

const FormError = ({ error }) => {
  return <p className="text-sm text-red-500 mt-1">{error}</p>;
};

export default FormError;
