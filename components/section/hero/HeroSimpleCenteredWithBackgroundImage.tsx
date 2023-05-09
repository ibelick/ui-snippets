import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from '@/components/ui/button';

const HeroMinimalBackgroundCTA = () => {
  return (
    <section>
      <div className='relative mx-auto max-w-7xl items-center px-8 py-12 md:px-12 lg:px-16 lg:py-24'>
        <img
          alt='hero'
          src='https://source.unsplash.com/random/900×700/?architecture'
          className='absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.2]'
        />
        <div className='max-auto w-full text-center lg:p-10'>
          <div className='mx-auto w-full justify-center'>
            <p className='mt-8 text-4xl font-semibold tracking-tighter text-white'>
              Welcome to Glazed UI
            </p>
            <p className='mx-auto mt-4 max-w-xl text-lg tracking-tight text-gray-200'>
              Create beautiful websites in minutes with our library of
              components.
            </p>
          </div>
          <div className='mx-auto mt-10 flex max-w-xl items-center justify-center gap-3'>
            <Button variant='secondary'>Get started</Button>
            <a
              href='#'
              className='inline-flex items-center justify-center text-sm font-semibold text-white duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600'
            >
              Learn more
              <span aria-hidden='true'>
                <ArrowRightIcon className='ml-1 h-4 w-4' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimalBackgroundCTA;
