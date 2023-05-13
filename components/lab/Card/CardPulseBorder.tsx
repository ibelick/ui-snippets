import React from 'react';

const CardPulseBorder = () => {
  return (
    <div className='relative h-48 w-48'>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex h-full items-center justify-center rounded-md border border-slate-800 bg-black px-3 py-2'>
        <p className='text-sm text-slate-200'>Glazed UI</p>
      </div>
    </div>
  );
};

export default CardPulseBorder;
