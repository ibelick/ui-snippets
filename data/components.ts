import TextAnimatedGradient from '@/components/lab/bla/TextAnimatedGradient';
import TextGradient from '@/components/lab/bla/TextGradient';
import TextShine from '@/components/lab/bla/TextShine';
import ButtonBackgroundShine from '@/components/lab/bla3/ButtonBackgroundShine';
import ButtonGradient from '@/components/lab/bla3/ButtonGradient';
import ButtonHoverGradient from '@/components/lab/bla3/ButtonHoverGradient';
import ButtonBackgroundSpotlight from '@/components/lab/bla3/ButtonBackgroundSpotlight';
import ButtonRotatingBackgroundGradient from '@/components/lab/bla3/ButtonRotatingBackgroundGradient';
import ButtonShadowGradient from '@/components/lab/bla3/ButtonShadowGradient';
import InputGradientBorder from '@/components/lab/bla5/InputGradientBorder';
import InputSpotlightBorder from '@/components/lab/bla5/InputSpotlightBorder';
import InputPulseBorder from '@/components/lab/bla5/InputPulseBorder';
import BadgeAnimatedGradientBorder from '@/components/lab/bla2/BadgeAnimatedGradientBorder';
import BadgeShine from '@/components/lab/bla2/BadgeShine';
import BadgeTextGradient from '@/components/lab/bla2/BadgeTextGradient';
import CardAnimatedBorderGradient from '@/components/lab/bla4/CardAnimatedBorderGradient';
import CardSpotlight from '@/components/lab/bla4/CardSpotlight';
import CardPulseBorder from '@/components/lab/bla4/CardPulseBorder';

const TWCONFIG = {
  ['animated-background-shine']: {
    theme: {
      extend: {
        animation: {
          'background-shine': 'background-shine 2s linear infinite',
        },
        keyframes: {
          'background-shine': {
            from: { backgroundPosition: '0 0' },
            to: { backgroundPosition: '-200% 0' },
          },
        },
      },
    },
  },
};

export const GLAZED_COMPONENTS = [
  {
    name: 'Text Gradient',
    component: TextGradient,
    slug: 'text-gradient',
    type: 'bla',
  },
  {
    name: 'Text Animated Gradient',
    component: TextAnimatedGradient,
    slug: 'text-animated-gradient',
    type: 'bla',
  },
  {
    name: 'Text Shine',
    component: TextShine,
    slug: 'text-shine',
    type: 'bla',
  },
  {
    name: 'Button Background Shine',
    component: ButtonBackgroundShine,
    slug: 'button-background-shine',
    type: 'bla3',
  },
  {
    name: 'Button Gradient',
    component: ButtonGradient,
    slug: 'button-gradient',
    type: 'bla3',
  },
  {
    name: 'Button Hover Gradient',
    component: ButtonHoverGradient,
    slug: 'button-hover-gradient',
    type: 'bla3',
  },
  {
    name: 'Button Background Spotlight',
    component: ButtonBackgroundSpotlight,
    slug: 'button-background-spotlight',
    type: 'bla3',
  },
  {
    name: 'Button Rotating Background Gradient',
    component: ButtonRotatingBackgroundGradient,
    slug: 'button-rotating-background-gradient',
    type: 'bla3',
  },
  {
    name: 'Button Shadow Gradient',
    component: ButtonShadowGradient,
    slug: 'button-shadow-gradient',
    type: 'bla3',
  },
  {
    name: 'Input Gradient Border',
    component: InputGradientBorder,
    slug: 'input-gradient-border',
    type: 'input',
  },
  {
    name: 'Input Spotlight Border',
    component: InputSpotlightBorder,
    slug: 'input-spotlight-border',
    type: 'input',
  },
  {
    name: 'Input Pulse Border',
    component: InputPulseBorder,
    slug: 'input-pulse-border',
    type: 'input',
  },
  {
    name: 'Badge Animated Gradient Border',
    component: BadgeAnimatedGradientBorder,
    slug: 'badge-animated-gradient-border',
    type: 'bla2',
    twConfig: TWCONFIG['animated-background-shine'],
  },
  {
    name: 'Badge Shine',
    component: BadgeShine,
    slug: 'badge-shine',
    type: 'bla2',
  },
  {
    name: 'Badge Text Gradient',
    component: BadgeTextGradient,
    slug: 'badge-text-gradient',
    type: 'bla2',
  },
  {
    name: 'Card Animated Border Gradient',
    component: CardAnimatedBorderGradient,
    slug: 'card-animated-border-gradient',
    type: 'bla4',
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    type: 'bla4',
  },
  {
    name: 'Card Pulse Border',
    component: CardPulseBorder,
    slug: 'card-pulse-border',
    type: 'bla4',
  },
];
