import ComponentPlayground from '@/components/glazed/ComponentPlayground';
import HeroSimpleCentered from '@/components/section/hero/HeroSimpleCentered';
import HeroSplitWithScreenshot from '@/components/section/hero/HeroSplitWithScreenshot';
import FooterSimpleCentered from '@/components/section/footer/FooterSimpleCentered';
import FooterSocialLinksOnly from '@/components/section/footer/FooterSocialLinksOnly';

const COMPONENTS = [
  {
    name: 'HeroSimpleCentered',
    component: HeroSimpleCentered,
  },
  {
    name: 'HeroSplitWithScreenshot',
    component: HeroSplitWithScreenshot,
  },
  {
    name: 'FooterSimpleCentered',
    component: FooterSimpleCentered,
  },
  {
    name: 'FooterSocialLinksOnly',
    component: FooterSocialLinksOnly,
  },
];

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-7xl py-10'>
      <div className='flex flex-col gap-8'>
        {COMPONENTS.map((component) => {
          return (
            <div key={component.name}>
              <h2 className='mb-2 text-xl font-medium'>{component.name}</h2>
              <ComponentPlayground>
                <component.component />
              </ComponentPlayground>
            </div>
          );
        })}
      </div>
    </main>
  );
}
