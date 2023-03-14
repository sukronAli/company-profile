import React from 'react';

const Badge = ({ title }) => {
  return (
    <label className="text-gray-800 dark:text-gray-300 bg-gray-300 dark:bg-dark-blue2 py-2 px-3 text-sm rounded-md mr-2 my-1 hover:bg-light-green hover:text-dark-blue1">
      {title}
    </label>
  );
};

export default Badge;
