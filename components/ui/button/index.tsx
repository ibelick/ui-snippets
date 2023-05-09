import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const csVariant = {
    primary: 'bg-gray-950 text-white hover:bg-gray-800',
    secondary: 'bg-gray-400 text-black hover:bg-gray-300',
  };

  return (
    <button
      {...props}
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${csVariant[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
