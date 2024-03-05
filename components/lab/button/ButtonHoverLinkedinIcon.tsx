const ButtonHoverLinkedinIcon = () => {
  return (
    <button className='before:hover:500 group relative flex h-12 w-12 items-center justify-start gap-2 rounded bg-sky-700 p-2 pr-6 font-bold text-neutral-50 duration-700 before:absolute before:left-8 before:-z-10 before:h-6 before:w-6 before:rotate-45 before:bg-sky-700 before:duration-700 hover:w-44 hover:bg-sky-600 before:hover:left-40 before:hover:bg-sky-600'>
      <svg
        y='0'
        xmlns='http://www.w3.org/2000/svg'
        x='0'
        width='100'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid meet'
        height='100'
        className='h-8 w-8 shrink-0 fill-neutral-50'
      >
        <path d='M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z'></path>
      </svg>
      <span className='inline-flex origin-left scale-x-0 transform border-l-2 px-1 opacity-0 transition-all duration-100 group-hover:scale-x-100 group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300'>
        Your Linkedin
      </span>
    </button>
  );
};

export default ButtonHoverLinkedinIcon;
