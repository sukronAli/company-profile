import React from 'react';

const FixedCard = ({ title, date, desc }) => {
  return (
    <div className="md:w-320 p-2 inline-block">
      <div className="bg-gray-300 dark:bg-dark-blue2 py-4 px-5 rounded-lg">
        <h1 className="text-md font-bold text-gray-50 dark:text-light-1 uppercase">
          {title}
        </h1>
        <p className="text-sm text-gray-400 uppercase">{date}</p>
        <p className="text-sm text-gray-600 dark:text-light-1 mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default FixedCard;
