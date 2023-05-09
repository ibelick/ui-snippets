import React from 'react';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} className='rounded-md border border-gray-300 p-2' />;
};

export default Input;
