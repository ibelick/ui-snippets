import { ArrowRightIcon } from '@radix-ui/react-icons';
import { COMPONENTS } from '@/data/components';
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
    <div className='relative flex items-center justify-center rounded-xl border border-gray-900 bg-gray-950/60 px-8 py-32'>
      <Link
        href={`/${slug}`}
        className='absolute left-5 top-4 text-sm text-gray-400'
      >
        {name}
      </Link>
      <div className='absolute right-5 top-3'>
        <Link href={`/${slug}`}>
          <ArrowRightIcon className='h-5 w-5 text-gray-400' />
        </Link>
      </div>
      <div className='z-0'>{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section>
        <div className='relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center'>
          <div>
            <h1 className='mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-5xl'>
              Collection of dark mode components and effects
            </h1>
            <p className='text-xl text-gray-500'>
              Crafted with{' '}
              <span className='text-gray-50'>React and Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </section>
      <div className='w-full py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {COMPONENTS.map((item, index) => (
            <CardComponent key={index} slug={item.slug} name={item.name}>
              <item.component />
            </CardComponent>
          ))}
        </div>
      </div>
    </>
  );
}
