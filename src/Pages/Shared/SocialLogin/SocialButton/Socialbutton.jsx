import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import FormError from '../../FormError/FormError';

const SocialButton = ({ icon, text, error, signInWithGoogle }) => {
  return (
    <>
      <button
        className="flex justify-center items-center gap-2 py-3 rounded font-medium border hover:bg-gray-100 transition duration-300 mt-4  w-[250px] md:w-[350px]"
        onClick={() => signInWithGoogle()}
        type="button"
      >
        {icon}
        <p className="hidden md:block">{text}</p>
      </button>
      <FormError error={error?.message} />
    </>
  );
};

export default SocialButton;
