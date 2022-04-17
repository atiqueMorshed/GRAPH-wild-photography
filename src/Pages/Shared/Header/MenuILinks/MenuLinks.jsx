import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';

import CustomLink from '../CustomLink/CustomLink';

const MenuLinks = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/service">Services</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      {user ? (
        <button onClick={() => signOut(auth)}>Logout</button>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuLinks;
