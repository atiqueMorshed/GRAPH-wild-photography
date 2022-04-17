import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-[calc(100vh-419px)] w-11/12 max-w-[600px] mx-auto my-20">
      <h1 className="text-3xl">Hi, I'm Atique Morshed.</h1>
      <p className="text-lg text-justify">
        My current goal is to be a full-stack web developer. I am also
        interested in web and database security. It'll take a long time but when
        I get there, I want to integrate the web with Artificial Intelligence.
        <br />
        <br />
        To achieve my goals, I need to set a clear path. Firstly, I'll master my
        front-end skills. I have allocated a year for this. After that, I'll put
        everything into mastering the backend. I currently have some backend
        knowledge with node and express but I also want to learn Spring. But
        mixing every technology only going to make things harder so, I'll stick
        with the MERN stack for now and when I get really familiar with
        everything, then I’ll move on to Spring. After that, I’ll work my way
        into database security, query optimization, MMDB, etc.
      </p>
    </div>
  );
};

export default About;
