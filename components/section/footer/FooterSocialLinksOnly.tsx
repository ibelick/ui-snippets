import React from 'react';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

const FooterSocialLinksOnly = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-12 sm:px-6 md:flex-row lg:px-8'>
        <span className='mt-8 text-xs text-gray-500 md:mt-0'>
          © {new Date().getFullYear()} Glazed UI, Inc. All rights reserved.
          Copyright ©{' '}
        </span>
        <div className='inline-flex w-full justify-center gap-6 md:w-auto md:justify-start'>
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
        </div>
      </div>
    </footer>
  );
};

export default FooterSocialLinksOnly;
