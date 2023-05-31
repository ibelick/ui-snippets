const ButtonShadowGradient = () => {
  return (
    <button className='relative inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#ffb6ff] to-[#b344ff] opacity-75 blur' />
      Glazed UI
    </button>
  );
};

export default ButtonShadowGradient;
