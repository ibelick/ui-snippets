import { ArrowRightIcon } from '@radix-ui/react-icons';
import { GLAZED_COMPONENTS } from '@/data/components';
import Link from 'next/link';

const Card: React.FC<{ children: React.ReactNode; slug: string }> = ({
  children,
  slug,
}) => {
  return (
    <div className='relative flex items-center justify-center rounded-xl bg-gray-800/40 p-8 backdrop-blur '>
      <div className='absolute right-2 top-2'>
        <Link href={`/${slug}`}>
          <ArrowRightIcon className='h-5 w-5 text-slate-300' />
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
              Continuously evolving.
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {GLAZED_COMPONENTS.map((item, index) => (
            <Card key={index} slug={item.slug}>
              <item.component />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
