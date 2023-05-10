const InputGradientBorder = () => {
  return (
    // @todo: w-full for input
    <input
      className='border-1 block w-56 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#ffb6ff,#b344ff)]  bg-origin-border px-3
        py-2 text-slate-200 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:outline-none'
      placeholder='Enter your email'
    />
  );
};

export default InputGradientBorder;
