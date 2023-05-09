import React from 'react';

type ComponentPlaygroundProps = {
  children: React.ReactNode;
};

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
}) => {
  return <div className='overflow-hidden rounded-md border'>{children}</div>;
};

export default ComponentPlayground;
