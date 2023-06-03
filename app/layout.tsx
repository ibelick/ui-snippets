import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import './globals.css';
import './prism.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ibelick - UI components collections',
  description:
    'Dive into a vibrant collection of next-gen UI components and effects. Each piece is meticulously crafted with React and Tailwind CSS, designed to inspire and accelerate your web development projects.',
};

const Header = () => {
  return (
    <header className='flex items-center justify-between py-8'>
      <Link href='/'>
        <div className='text-xl text-white'>ui.ibelick</div>
      </Link>
      <nav className='flex gap-6'>
        <a
          href='https://twitter.com/Ibelick'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <TwitterLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
        </a>
        <a
          href='https://github.com/ibelick/ui'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <GitHubLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
        </a>
      </nav>
    </header>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='bg-black'>
          <div className='mx-auto flex min-h-screen max-w-5xl flex-col px-4'>
            <Header />
            <main className='flex-1'>{children}</main>
            <footer>
              <div className='flex items-center justify-center py-8'>
                <span className='text-sm text-gray-400'>
                  Made by
                  <a
                    href='https://twitter.com/Ibelick'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-1 text-white'
                  >
                    @Ibelick
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
