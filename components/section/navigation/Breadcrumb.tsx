import { CaretRightIcon } from '@radix-ui/react-icons';
import React from 'react';

const Breadcrumb = () => {
  return (
    <section>
      <div className='mx-auto max-w-7xl items-center md:px-12'>
        <div className='mx-auto w-full justify-center'>
          <nav className='mx-auto flex justify-center ' aria-label='breadcrumb'>
            <ol role='list' className='flex items-center space-x-4'>
              <li>
                <div className='flex items-center'>
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-500 duration-200 hover:text-gray-700'
                  >
                    Parent
                  </a>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <CaretRightIcon className='h-5 w-5 flex-shrink-0 text-gray-300' />
                  <a
                    href='#'
                    className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                  >
                    Parent
                  </a>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <CaretRightIcon className='h-5 w-5 flex-shrink-0 text-gray-300' />
                  <a
                    href='#'
                    className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                  >
                    Parent
                  </a>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <CaretRightIcon className='h-5 w-5 flex-shrink-0 text-gray-300' />
                  <a
                    href='#'
                    className='ml-4 text-sm font-medium text-blue-500 hover:text-gray-700'
                    aria-current='page'
                  >
                    Current
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
