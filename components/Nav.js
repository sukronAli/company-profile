import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { nav } from '../data/staticdata';
import Switch from './Switch';

const Nav = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const navData = nav[locale];

  return (
    
<nav class="bg-gray-50 border-gray-400 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-bold whitespace-nowrap text-blue-600">COMPANY</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-dark-500 rounded-lg md:hidden dark:hover:bg-gray-100 focus:outline-none focus:ring-2 dark:focus:ring-gray-200 dark:text-gray-400 hover:bg-light-green focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
       <nav className="dark:text-dark-blue1 text-light-green font-Rubik">
         {navData.map((n, i) => (
          <LinkScroll
            key={i}
            to={n.scroll}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="font-bold cursor-pointer md:mx-5 mx-3 uppercase transition-colors hover:text-dark-blue1"
          >
            {n.name}
          </LinkScroll>
        ))}
      </nav>
    </div>
  </div>
</nav>
  );
};

export default Nav;
