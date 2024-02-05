'use client';
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

type CopyCode = {
  code: string;
};

const CopyCode: React.FC<CopyCode> = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div
      className='cursor-pointer rounded-md border border-gray-900 bg-gray-900 p-2 transition hover:bg-gray-800'
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <CheckIcon className='h-4 w-4 text-gray-50' />
      ) : (
        <CopyIcon className='h-4 w-4 text-gray-50' />
      )}
    </div>
  );
};

export default CopyCode;
