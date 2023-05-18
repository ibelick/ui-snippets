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
      className='cursor-pointer rounded-md border border-neutral-900 bg-neutral-800 p-2 transition hover:bg-neutral-700'
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <CheckIcon className='h-4 w-4 text-white' />
      ) : (
        <CopyIcon className='h-4 w-4 text-white' />
      )}
    </div>
  );
};

export default CopyCode;
