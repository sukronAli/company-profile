import Image from 'next/image';
import React, { useEffect } from 'react';
import { educations, experiences } from '../data';
import FixedCard from './FixedCard';

const About = ({ photo, summary, stacks }) => {
  const scrollHorizontally = (id) => (e) => {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.querySelector(id).scrollLeft -= delta * 30; // Multiplied by 40
    e.preventDefault();
  };

  const scrollX = (id) => {
    if (document.querySelector(id).addEventListener) {
      // IE9, Chrome, Safari, Opera
      document
        .querySelector(id)
        .addEventListener('mousewheel', scrollHorizontally(id), false);
      // Firefox
      document
        .querySelector(id)
        .addEventListener('DOMMouseScroll', scrollHorizontally(id), false);
    } else {
      // IE 6/7/8
      document.querySelector(id).attachEvent('onmousewheel', scrollHorizontally(id));
    }
  };

  useEffect(() => {
    scrollX('#workExperienceScroll');
    scrollX('#educationScroll');
  }, []);

  return (
    <div>
      <div
        id="workExperienceScroll"
        className="max-w-xl mx-auto overflow-auto whitespace-nowrap scroll font-sans-overpass"
      >
        {experiences.map((exp, i) => (
          <FixedCard key={i} title='Who We Are' date={exp.date} desc={exp.desc} />
        ))}
      </div>
      <h1 className="font-sans-overpass text-lg font-bold text-dark-green-2 dark:text-light-green mt-14 mb-5 text-center">
        Education
      </h1>
      <div
        id="educationScroll"
        className="max-w-xl mx-auto overflow-auto whitespace-nowrap scroll font-sans-overpass"
      >
        {educations.map((edu, i) => (
          <FixedCard key={i} title={edu.title} date={edu.date} desc={edu.desc} />
        ))}
      </div>
      <div className="text-center">
        <h1 className="font-sans-overpass text-lg font-bold text-dark-green-2 dark:text-light-green mt-14 mb-5">
          My Tech Stack
        </h1>
        <div className="text-center max-w-xl mx-auto">
          {stacks.map((stack, i) => (
            <div key={i} className="inline-block mx-6 my-4 group has-tooltip relative">
              <span className="invisible tooltip opacity-0 absolute rounded badges py-2 px-3 shadow-lg  -mt-8 transition-opacity duration-300 group-hover:opacity-100 group-hover:z-55 -bottom-6 -left-2">
                {stack.label}
              </span>
              <Image src={`/${stack.image}`} height="60" width="60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
