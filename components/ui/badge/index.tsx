import { cva, type VariantProps } from 'class-variance-authority';

const badgeCva = cva(
  'transition-colors overflow-hidden items-center rounded-full flex py-1.5 px-3.5 text-xs font-medium',
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

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeCva>;

const Badge: React.FC<BadgeProps> = ({ className, variant, children }) => {
  return <div className={badgeCva({ className, variant })}>{children}</div>;
};

export default Badge;
