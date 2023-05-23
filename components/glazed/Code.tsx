import { highlight } from '@/lib/shiki';
import { Lang } from 'shiki';

type CodeProps = {
  code: string;
  lang: Lang;
};

const Code = async ({ code, lang }: CodeProps) => {
  const component = await highlight(code, 'github-dark', lang);

  return <div dangerouslySetInnerHTML={{ __html: component }} />;
};

// @NOTE: workaround for server component type
export default Code as unknown as (props: CodeProps) => JSX.Element;
