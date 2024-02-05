const BadgeAnimatedGradientBorder = () => {
  return (
    <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        Badge Text
      </div>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
