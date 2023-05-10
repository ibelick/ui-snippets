import React from 'react';

const ButtonRotatingBackgroundGradient = () => {
  return (
    <button className='relative inline-flex h-12 cursor-default items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-slate-800 to-slate-900 px-6 py-5 font-medium text-white transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      {/* height / width depends on the size of the button */}
      <div className='absolute h-[300px] w-[300px] animate-[spin_6s_linear_infinite] bg-gradient-to-b from-[#ffb6ff] via-[#fff] to-[#b344ff] duration-200 ' />
      <span className='relative text-black'>Button Rotating Background</span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
