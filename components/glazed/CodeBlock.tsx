'use client';
import { useEffect } from 'react';

import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';

require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-jsx');

type CodeBlockProps = {
  markdownContent: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ markdownContent }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <ReactMarkdown children={markdownContent} />;
};

export default CodeBlock;
