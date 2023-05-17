'use client';
import { CopyIcon } from '@radix-ui/react-icons';

type CopyCode = {
  code: string;
};

const CopyCode: React.FC<CopyCode> = ({ code }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      className='cursor-pointer rounded-md border border-neutral-900 bg-neutral-800 p-2 transition hover:bg-neutral-700'
      onClick={onCopy}
    >
      <CopyIcon className='h-4 w-4 text-white' />
    </div>
  );
};

export default CopyCode;
