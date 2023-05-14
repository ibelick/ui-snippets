const code = `
import React from 'react';

const TextGradient = () => {
  return (
    <span className='bg-gradient-to-t from-[#ffb6ff] to-[#b344ff] bg-clip-text text-xl text-transparent'>
      Glazed UI
    </span>
  );
};

export default TextGradient;
`;

type CodeBlockProps = {
  markdownContent: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ markdownContent }) => {
  return (
    <pre className='code-output'>
      <code className={`language-tsx`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
