import { useState, useEffect } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Switch() {
  const [toggle, setToggle] = useState(false);
  // const toggleClass = ' transform translate-x-5';

  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (theme && theme !== 'dark') setToggle(true);
  }, []);

  const selectTheme = (e) => {
    setToggle(!toggle);
    let theme = localStorage.getItem('theme');

    console.log(theme);

    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    const html = document.querySelector('html');

    if (theme === 'dark') {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  };

  return (
    <>
      {/*   Switch Container */}
      <div
        className={`${
          toggle ? 'justify-end ' : ''
        }md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-2 cursor-pointer box-border`}
        onClick={selectTheme}
      >
        <div>{toggle ? <BsSunFill size="2vh" /> : <BsMoonFill size="2vh" />}</div>

        {/* Switch */}
        {/* <div
          className={
            'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
            (toggle ? null : toggleClass)
          }
        ></div> */}
      </div>
    </>
  );
}

export default Switch;
