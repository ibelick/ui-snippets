import {
  ArrowRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Button from '@/components/ui/button';

const HeroSimpleCentered = () => {
  return (
    <section>
      <div className='mx-auto max-w-7xl items-center px-8 py-12 md:px-12 lg:px-16 lg:py-24'>
        <div className='max-auto w-full justify-center text-center lg:p-10'>
          <div className='mx-auto w-full justify-center'>
            <p className='mt-8 text-5xl font-medium tracking-tighter text-black'>
              Hello, Im <span className='text-blue-500'>John Doe</span>
            </p>
            <p className='mx-auto mt-4 max-w-xl text-lg tracking-tight text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </p>
          </div>
          <div className='mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 lg:flex-row'>
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

        <div className='mt-6 flex justify-center gap-6'>
          <a className='group -m-1 p-1' aria-label='Follow on Twitter' href='#'>
            <TwitterLogoIcon className='h-6 w-6 fill-black transition hover:text-blue-500' />
          </a>
          <a
            className='group -m-1 p-1'
            aria-label='Follow on Instagram'
            href='#'
          >
            <InstagramLogoIcon className='h-6 w-6 fill-black transition hover:text-blue-500' />
          </a>
          <a className='group -m-1 p-1' aria-label='Follow on GitHub' href='#'>
            <GitHubLogoIcon className='h-6 w-6 fill-black transition hover:text-blue-500' />
          </a>
          <a
            className='group -m-1 p-1'
            aria-label='Follow on LinkedIn'
            href='#'
          >
            <LinkedInLogoIcon className='h-6 w-6 fill-black transition hover:text-blue-500' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSimpleCentered;
