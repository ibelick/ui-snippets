const ButtonAnimatedGradient = () => {
  return (
    <>
      <button className='transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-200 via-[#ffb6ff] to-[#b344ff] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_100%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        button animated gradient
      </button>
    </>
  );
};

export default ButtonAnimatedGradient;
