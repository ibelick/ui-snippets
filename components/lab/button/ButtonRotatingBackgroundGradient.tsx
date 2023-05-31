const ButtonRotatingBackgroundGradient = () => {
  return (
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffb6ff_0%,#fff_50%,#ffb7ff_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
        Glazed UI
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;