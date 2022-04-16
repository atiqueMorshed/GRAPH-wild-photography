import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const MenuLinks = () => {
  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/service">Services</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
    </>
  );
};

export default MenuLinks;
