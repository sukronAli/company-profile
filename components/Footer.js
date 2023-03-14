import React from 'react';
import { TiArrowUp, TiSocialGithub, TiSocialLinkedin } from 'react-icons/ti';

import { AiOutlineBehance } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-dark-blue2 dark:text-light-1 font-sans-overpass">
      <h1 className="text-xl uppercase font-bold tracking-wider mb-4">Let's Connect</h1>
      <div className="flex">
        <a href="https://www.linkedin.com/in/nauvalshidqi/" target="_blank">
          <TiSocialLinkedin className="text-dark-green-2 dark:text-light-green text-6xl mx-4" />
        </a>
        <a href="https://github.com/nauvalsh" target="_blank">
          <TiSocialGithub className="text-dark-green-2 dark:text-light-green text-6xl mx-4" />
        </a>
        <a href="https://www.behance.net/nauvalsh" target="_blank">
          <AiOutlineBehance className="text-dark-green-2 dark:text-light-green text-6xl mx-4" />
        </a>
      </div>
      <p className="mt-6 text-lg text-center">
        Build with ♥ Nauval Shidqi © {new Date().getFullYear()}
      </p>
      <p className="text-lg text-center">Powered by React, Next.js, Tailwind CSS</p>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="btn-mod-light dark:btn-mod flex items-center mt-6 cursor-pointer"
      >
        <TiArrowUp className="mr-2" /> Back to Top
      </Link>
    </div>
  );
};

export default Footer;
