import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';

import CustomLink from '../CustomLink/CustomLink';
import HashLink from '../HashLink/HashLink';

const MenuLinks = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <CustomLink to="/">Home</CustomLink>
      <HashLink to="/#services" id="services">
        Services
      </HashLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      {user ? (
        <button
          className="py-4 px-4 hover:text-navy-300 border-b border-gray-300 border-dashed w-full text-center md:border-0"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuLinks;
