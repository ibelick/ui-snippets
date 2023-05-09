import Button from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const HeroSplitWithScreenshot = () => {
  return (
    <section className='relative flex w-full items-center bg-white'>
      <div className='relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16'>
        <div className='relative m-auto flex-col items-start align-middle'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
            <div className='relative m-auto items-center gap-12  lg:inline-flex'>
              <div className='max-w-xl text-center lg:text-left'>
                <div>
                  <p className='text-2xl font-medium tracking-tight text-black sm:text-4xl'>
                    Welcome to Glazed UI
                  </p>
                  <p className='mt-4 max-w-xl text-base tracking-tight text-gray-600'>
                    Create beautiful websites in minutes with our library of
                    components.
                  </p>
                </div>
                <div className='mt-10 flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start'>
                  <Button>Get started</Button>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600'
                  >
                    Learn more
                    <span aria-hidden='true'>
                      <ArrowRightIcon className='h-4 w-4' />{' '}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-12 block w-full lg:mt-0'>
              <img
                className='mx-auto h-80 w-full rounded-xl object-cover object-center lg:ml-auto'
                alt='hero'
                src='https://source.unsplash.com/random/900×700/?website'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitWithScreenshot;
