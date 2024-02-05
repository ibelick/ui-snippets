'use client';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const isRoot = pathname === '/';

  return (
    <>
      {isRoot ? (
        <div className='absolute left-0 right-0 top-0 -z-10 h-52 bg-gradient-to-b from-violet-500/20 from-10% to-gray-950' />
      ) : null}

      <header className='container mx-auto flex max-w-5xl items-center justify-between px-4 py-8'>
        <Link href='/'>
          <div className='text-xl text-gray-50'>ui.ibelick</div>
        </Link>
        <nav className='flex gap-6'>
          <a
            href='https://twitter.com/Ibelick'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <TwitterLogoIcon className='h-6 w-6 text-gray-50 transition-colors hover:text-gray-400' />
          </a>
          <a
            href='https://github.com/ibelick/ui-snippets'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <GitHubLogoIcon className='h-6 w-6 text-gray-50 transition-colors hover:text-gray-400' />
          </a>
        </nav>
      </header>
    </>
  );
};
