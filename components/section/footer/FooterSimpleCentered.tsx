import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import React from 'react';

const FooterSimpleCentered = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          <div className='px-5 py-2'>
            <a href='#' className='text-sm text-gray-500 hover:text-blue-600'>
              About
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-sm text-gray-500 hover:text-blue-600'>
              Jobs
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-sm text-gray-500 hover:text-blue-600'>
              Blog
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-sm text-gray-500 hover:text-blue-600'>
              Press
            </a>
          </div>
          <div className='px-5 py-2'>
            <a href='#' className='text-sm text-gray-500 hover:text-blue-600'>
              Partners
            </a>
          </div>
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          <span className='m-auto inline-flex w-full justify-center gap-6 md:w-auto md:justify-start'>
            <a href='#'>
              <GitHubLogoIcon className='h-6 w-6 text-slate-600 transition hover:text-blue-500' />
            </a>
            <a href='#'>
              <TwitterLogoIcon className='h-6 w-6 text-slate-600 transition hover:text-blue-500' />
            </a>
            <a href='#'>
              <InstagramLogoIcon className='h-6 w-6 text-slate-600 transition hover:text-blue-500' />
            </a>
            <a href='#'>
              <LinkedInLogoIcon className='h-6 w-6 text-slate-600 transition hover:text-blue-500' />
            </a>
          </span>
        </div>
        <p className='mt-8 text-center'>
          <span className='mx-auto mt-2 text-xs text-gray-500'>
            © {new Date().getFullYear()} Glazed UI, Inc. All rights reserved.
            Copyright ©{' '}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default FooterSimpleCentered;
