import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white pt-28 pb-10 mt-28 text-center">
      <div className="social flex gap-6 md:gap-12 justify-center mb-7">
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="h-7 w-7" icon={faTwitter} />
        </a>
        <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="h-7 w-7" icon={faTwitch} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="h-7 w-7" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="h-7 w-7" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="h-7 w-7" icon={faFacebookF} />
        </a>
      </div>
      <p>&copy; 2022 | Atique Morshed | All rights reserved.</p>
    </div>
  );
};

export default Footer;
