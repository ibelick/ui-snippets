const CardAnimatedBorderGradient = () => {
  return (
    <div className='relative h-48 w-48 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl' />
    </div>
  );
};

export default CardAnimatedBorderGradient;
