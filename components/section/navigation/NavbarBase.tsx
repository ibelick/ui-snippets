'use client';
import clsxm from '@/lib/clsxm';
import { useState } from 'react';

const NavbarBase = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between bg-white px-2 py-3 text-black'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
          <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
            <a
              className='mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase'
              href='#'
            >
              Glazed UI
            </a>
            <button
              className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 outline-none focus:outline-none lg:hidden'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              menu
            </button>
          </div>
          <div
            className={clsxm(
              'flex-grow items-center lg:flex',
              navbarOpen ? ' flex' : ' hidden'
            )}
          >
            <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
              <li className='nav-item'>
                <a
                  className='flex items-center px-0 py-2 hover:opacity-75 md:px-3'
                  href='#'
                >
                  <span className='pl-0 md:ml-2'>About</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='flex items-center px-0 py-2 hover:opacity-75 md:px-3'
                  href='#'
                >
                  <span className='pl-0 md:ml-2'>Projects</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='flex items-center px-0 py-2 hover:opacity-75 md:px-3'
                  href='#'
                >
                  <span className='pl-0 md:ml-2'>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarBase;
