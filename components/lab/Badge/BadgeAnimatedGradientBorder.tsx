import React from 'react';

const BadgeAnimatedGradientBorder = () => {
  return (
    <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffb6ff_0%,#fff_50%,#ffb7ff_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950/80 px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl'>
        Glazed UI
      </span>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
