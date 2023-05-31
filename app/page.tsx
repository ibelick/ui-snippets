import { ArrowRightIcon } from '@radix-ui/react-icons';
import { GLAZED_COMPONENTS } from '@/data/components';
import Link from 'next/link';

type CardComponentProps = {
  children: React.ReactNode;
  slug: string;
  name: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  children,
  slug,
  name,
}) => {
  return (
    <div className='relative flex items-center justify-center rounded-xl bg-gray-800/40 px-8 py-32 backdrop-blur '>
      <Link
        href={`/${slug}`}
        className='absolute left-5 top-3 text-sm text-slate-400'
      >
        {name}
      </Link>
      <div className='absolute right-5 top-3'>
        <Link href={`/${slug}`}>
          <ArrowRightIcon className='h-5 w-5 text-slate-400' />
        </Link>
      </div>
      {/* set the components to 160px */}
      <div className='[&>button]:w-40 [&>div]:w-40 [&>input]:w-40'>
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div className='absolute -top-4 -z-10 flex w-full justify-center'>
            <div className='h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-blue-500 opacity-20 blur-[100px]' />
          </div>
          <div>
            <h1 className='mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-5xl'>
              A vibrant collection of next-gen UI components and effects
            </h1>
            <p className='text-xl text-slate-500'>
              Crafted with{' '}
              <span className='text-white'>React and Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {GLAZED_COMPONENTS.map((item, index) => (
            <CardComponent key={index} slug={item.slug} name={item.name}>
              <item.component />
            </CardComponent>
          ))}
        </div>
      </div>
    </>
  );
}
