const BadgeTextGradient = () => {
  return (
    <span className='inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-black px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl'>
      <span className='bg-gradient-to-t from-[#fff] to-[#b344ff] bg-clip-text text-transparent'>
        Glazed UI
      </span>
    </span>
  );
};

export default BadgeTextGradient;
