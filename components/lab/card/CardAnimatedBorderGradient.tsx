const CardAnimatedBorderGradient = () => {
  return (
    <div className='relative h-48 w-48 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffb6ff_0%,#fff_50%,#ffb7ff_100%)]' />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl' />
    </div>
  );
};

export default CardAnimatedBorderGradient;
