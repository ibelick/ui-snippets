import ComponentPlayground from '@/components/glazed/ComponentPlayground';
import TextAnimatedGradient from '@/components/lab/Text/TextAnimatedGradient';
import TextGradient from '@/components/lab/Text/TextGradient';
import TextShine from '@/components/lab/Text/TextShine';
import ButtonBackgroundShine from '@/components/lab/Button/ButtonBackgroundShine';
import ButtonGradient from '@/components/lab/Button/ButtonGradient';
import ButtonHoverGradient from '@/components/lab/Button/ButtonHoverGradient';
import ButtonBackgroundSpotlight from '@/components/lab/Button/ButtonBackgroundSpotlight';
import ButtonRotatingBackgroundGradient from '@/components/lab/Button/ButtonRotatingBackgroundGradient';
import InputGradientBorder from '@/components/lab/Input/InputGradientBorder';
import InputSpotlightBorder from '@/components/lab/Input/InputSpotlightBorder';

export default function Home() {
  return (
    <div className='bg-black'>
      <main className='mx-auto min-h-screen max-w-7xl py-10'>
        <div>
          <div className='flex flex-col items-start gap-4 bg-gray-800/40 p-10 backdrop-blur'>
            <TextGradient />
            <TextAnimatedGradient />
            <TextShine />
            <ButtonBackgroundShine />
            <ButtonGradient />
            <ButtonHoverGradient />
            <ButtonBackgroundSpotlight />
            <ButtonRotatingBackgroundGradient />
            <InputGradientBorder />
            <InputSpotlightBorder />
          </div>
        </div>
      </main>
    </div>
  );
}
