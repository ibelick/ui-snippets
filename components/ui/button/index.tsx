import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonCva = cva(
  'inline-flex transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-medium h-12 px-6 rounded-md items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-slate-900 hover:bg-slate-700 text-white',
        secondary: 'bg-slate-400 text-black hover:bg-slate-300',
        outline: 'border border-slate-400 text-black hover:bg-slate-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonCva>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button {...props} className={buttonCva({ variant, className })}>
      {children}
    </button>
  );
};

export default Button;
