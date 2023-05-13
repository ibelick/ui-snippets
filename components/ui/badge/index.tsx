import { cva, type VariantProps } from 'class-variance-authority';

const badgeCva = cva(
  'transition-colors overflow-hidden items-center rounded-full flex py-1.5 px-3.5 text-xs font-medium',
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

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeCva>;

const Badge: React.FC<BadgeProps> = ({ className, variant, children }) => {
  return <div className={badgeCva({ className, variant })}>{children}</div>;
};

export default Badge;
