import { highlight } from '@/lib/shiki';

type CodeBlockProps = {
  code: string;
};

const CodeBlock = async ({ code }: CodeBlockProps) => {
  const component = await highlight(code, 'github-dark', 'tsx');

  return (
    <div className='overflow-x-auto rounded-md border border-neutral-800 p-4'>
      <div dangerouslySetInnerHTML={{ __html: component }} />
    </div>
  );
};

// @NOTE: workaround for server component type
export default CodeBlock as unknown as (props: CodeBlockProps) => JSX.Element;
