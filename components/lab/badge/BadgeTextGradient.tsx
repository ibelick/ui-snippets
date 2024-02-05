const BadgeTextGradient = () => {
  return (
    <span className='inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 py-1 text-sm font-medium text-gray-300 backdrop-blur-3xl'>
      <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
        Badge Text
      </span>
    </span>
  );
};

export default BadgeTextGradient;
