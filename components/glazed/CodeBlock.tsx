import { highlight } from '@/lib/shiki';

type CodeBlockProps = {
  code: string;
};

const CodeBlock = async ({ code }: CodeBlockProps) => {
  // copy code

  const component = await highlight(code, 'github-dark', 'tsx');

  return (
    <div className='overflow-y-scroll'>
      <div dangerouslySetInnerHTML={{ __html: component }} />
    </div>
  );
};

// @NOTE: workaround for server component type
export default CodeBlock as unknown as (props: CodeBlockProps) => JSX.Element;
