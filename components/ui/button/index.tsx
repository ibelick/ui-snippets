import { cva, type VariantProps } from 'class-variance-authority';

const buttonCva = cva(
  'inline-flex transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 font-medium h-12 px-6 rounded-md items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-gray-900 hover:bg-gray-700 text-gray-50',
        secondary: 'bg-gray-400 text-gray-950 hover:bg-gray-300',
        outline: 'border border-gray-400 text-gray-950 hover:bg-gray-200',
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
