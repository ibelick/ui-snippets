import ComponentPlayground from '@/components/glazed/ComponentPlayground';
import TextAnimatedGradient from '@/components/lab/Text/TextAnimatedGradient';
import TextGradient from '@/components/lab/Text/TextGradient';
import TextShine from '@/components/lab/Text/TextShine';
import ButtonBackgroundShine from '@/components/lab/Button/ButtonBackgroundShine';
import ButtonGradient from '@/components/lab/Button/ButtonGradient';
import ButtonHoverGradient from '@/components/lab/Button/ButtonHoverGradient';
import ButtonBackgroundSpotlight from '@/components/lab/Button/ButtonBackgroundSpotlight';
import ButtonRotatingBackgroundGradient from '@/components/lab/Button/ButtonRotatingBackgroundGradient';
import ButtonShadowGradient from '@/components/lab/Button/ButtonShadowGradient';
import InputGradientBorder from '@/components/lab/Input/InputGradientBorder';
import InputSpotlightBorder from '@/components/lab/Input/InputSpotlightBorder';
import InputPulseBorder from '@/components/lab/Input/InputPulseBorder';
import BadgeAnimatedGradientBorder from '@/components/lab/Badge/BadgeAnimatedGradientBorder';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import BadgeShine from '@/components/lab/Badge/BadgeShine';
import BadgeTextGradient from '@/components/lab/Badge/BadgeTextGradient';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // set the buttons to 160px
    <div className='flex items-center justify-center rounded-xl bg-gray-800/40 p-8 backdrop-blur [&>button]:w-40 [&>div]:w-40 [&>input]:w-40'>
      {children}
    </div>
  );
};

const COMPONENTS = [
  <TextGradient />,
  <TextAnimatedGradient />,
  <TextShine />,
  <ButtonBackgroundShine />,
  <ButtonGradient />,
  <ButtonHoverGradient />,
  <ButtonBackgroundSpotlight />,
  <ButtonRotatingBackgroundGradient />,
  <ButtonShadowGradient />,
  <InputGradientBorder />,
  <InputSpotlightBorder />,
  <InputPulseBorder />,
  <BadgeAnimatedGradientBorder />,
  <BadgeShine />,
  <BadgeTextGradient />,
];

export default function Home() {
  return (
    <div className='bg-black'>
      <div className='mx-auto min-h-screen max-w-5xl px-4'>
        <header className='flex items-center justify-between py-8'>
          <div className='text-xl text-white'>Glazed UI</div>
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
              href='https://github.com/ibelick/glazed-ui'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex'
            >
              <GitHubLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
            </a>
          </nav>
        </header>
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
        <main className='mx-auto min-h-screen max-w-7xl py-10'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {COMPONENTS.map((component, index) => (
              <Card key={index}>{component}</Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
