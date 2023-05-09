import clsxm from '@/lib/clsxm';
import React from 'react';

type ComponentPlaygroundProps = {
  children: React.ReactNode;
  isCentered?: boolean;
};

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
  isCentered,
}) => {
  return (
    <div
      className={clsxm(
        `min-h-[400px] overflow-hidden rounded-md border`,
        isCentered && 'flex items-center justify-center'
      )}
    >
      {children}
    </div>
  );
};

export default ComponentPlayground;
