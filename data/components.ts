import TextAnimatedGradient from '@/components/lab/text/TextAnimatedGradient';
import TextGradient from '@/components/lab/text/TextGradient';
import TextShine from '@/components/lab/text/TextShine';
import ButtonBackgroundShine from '@/components/lab/button/ButtonBackgroundShine';
import ButtonGradient from '@/components/lab/button/ButtonGradient';
import ButtonHoverGradient from '@/components/lab/button/ButtonHoverGradient';
import ButtonBackgroundSpotlight from '@/components/lab/button/ButtonBackgroundSpotlight';
import ButtonRotatingBackgroundGradient from '@/components/lab/button/ButtonRotatingBackgroundGradient';
import ButtonHoverGithubIcon from '@/components/lab/button/ButtonHoverGithubIcon';
import ButtonHoverLinkedinIcon from '@/components/lab/button/ButtonHoverLinkedinIcon';
import ButtonShadowGradient from '@/components/lab/button/ButtonShadowGradient';
import InputGradientBorder from '@/components/lab/input/InputGradientBorder';
import InputSpotlightBorder from '@/components/lab/input/InputSpotlightBorder';
import InputPulseBorder from '@/components/lab/input/InputPulseBorder';
import BadgeAnimatedGradientBorder from '@/components/lab/badge/BadgeAnimatedGradientBorder';
import BadgeShine from '@/components/lab/badge/BadgeShine';
import BadgeTextGradient from '@/components/lab/badge/BadgeTextGradient';
import CardAnimatedBorderGradient from '@/components/lab/card/CardAnimatedBorderGradient';
import CardSpotlight from '@/components/lab/card/CardSpotlight';
import CardPulseBorder from '@/components/lab/card/CardPulseBorder';
import CardTilt from '@/components/lab/card/CardTilt';

const TWCONFIG = {
  ['text-gradient']: {
    animation: {
      'text-gradient': 'text-gradient 1.5s linear infinite',
    },
    keyframes: {
      'text-gradient': {
        to: {
          backgroundPosition: '200% center',
        },
      },
    },
  },
  ['background-shine']: {
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
  ['pulse-slow']: {
    animation: {
      'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  ['border-width']: {
    animation: {
      'border-width': 'border-width 3s infinite alternate',
    },
    keyframes: {
      'border-width': {
        from: { width: '10px', opacity: '0' },
        to: { width: '100px', opacity: '1' },
      },
    },
  },
};

export const COMPONENTS = [
  {
    name: 'Text Gradient',
    component: TextGradient,
    slug: 'text-gradient',
    type: 'text',
  },
  {
    name: 'Text Animated Gradient',
    component: TextAnimatedGradient,
    slug: 'text-animated-gradient',
    type: 'text',
    twConfig: TWCONFIG['text-gradient'],
  },
  {
    name: 'Text Shine',
    component: TextShine,
    slug: 'text-shine',
    type: 'text',
    twConfig: TWCONFIG['background-shine'],
  },
  {
    name: 'Button Background Shine',
    component: ButtonBackgroundShine,
    slug: 'button-background-shine',
    type: 'button',
    twConfig: TWCONFIG['background-shine'],
  },
  {
    name: 'Button Gradient',
    component: ButtonGradient,
    slug: 'button-gradient',
    type: 'button',
  },
  {
    name: 'Button Hover Gradient',
    component: ButtonHoverGradient,
    slug: 'button-hover-gradient',
    type: 'button',
  },
  {
    name: 'Button Background Spotlight',
    component: ButtonBackgroundSpotlight,
    slug: 'button-background-spotlight',
    type: 'button',
  },
  {
    name: 'Button Rotating Background Gradient',
    component: ButtonRotatingBackgroundGradient,
    slug: 'button-rotating-background-gradient',
    type: 'button',
  },
  {
    name: 'Button Shadow Gradient',
    component: ButtonShadowGradient,
    slug: 'button-shadow-gradient',
    type: 'button',
  },
  {
    name: 'Button Hover Github Icon',
    component: ButtonHoverGithubIcon,
    slug: 'button-hover-github-icon',
    type: 'button',
  },
  {
    name: 'Button Hover Linkedin Icon',
    component: ButtonHoverLinkedinIcon,
    slug: 'button-hover-linkedin-icon',
    type: 'button',
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
    twConfig: TWCONFIG['border-width'],
  },
  {
    name: 'Badge Animated Gradient Border',
    component: BadgeAnimatedGradientBorder,
    slug: 'badge-animated-gradient-border',
    type: 'badge',
  },
  {
    name: 'Badge Shine',
    component: BadgeShine,
    slug: 'badge-shine',
    type: 'badge',
    twConfig: TWCONFIG['background-shine'],
  },
  {
    name: 'Badge Text Gradient',
    component: BadgeTextGradient,
    slug: 'badge-text-gradient',
    type: 'badge',
  },
  {
    name: 'Card Animated Border Gradient',
    component: CardAnimatedBorderGradient,
    slug: 'card-animated-border-gradient',
    type: 'card',
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    type: 'card',
  },
  {
    name: 'Card Pulse Border',
    component: CardPulseBorder,
    slug: 'card-pulse-border',
    type: 'card',
    twConfig: TWCONFIG['border-width'],
  },
  {
    name: 'Card Tilt',
    component: CardTilt,
    slug: 'card-tilt',
    type: 'card',
  },
];
