import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputCva = cva(
  'bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
);

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputCva({ className })}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
