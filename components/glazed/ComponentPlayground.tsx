import { cva, type VariantProps } from 'class-variance-authority';

const componentPlaygroundCva = cva(
  'min-h-[200px] overflow-hidden rounded-md border p-8',
  {
    variants: {
      isCentered: {
        true: 'flex items-center justify-center',
      },
    },
  }
);

export type ComponentPlaygroundProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof componentPlaygroundCva>;

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
  isCentered,
  className,
}) => {
  return (
    <div className={componentPlaygroundCva({ isCentered, className })}>
      {children}
    </div>
  );
};

export default ComponentPlayground;
