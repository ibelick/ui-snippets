import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import CodeBlock from '@/components/glazed/CodeBlock';
import TextGradient from '../../components/lab/Text/TextGradient';
import { MDXProvider } from '@mdx-js/react';
import { useEffect, useState } from 'react';
import { GLAZED_COMPONENTS } from '@/data/components';

async function readAndConvertToMDX(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    'utf8'
  );
  const tsxCode = '```jsx\n' + fileContent + '\n```\n';

  return tsxCode;
}

const ComponentPage = async () => {
  const filePath = './components/lab/Text/TextGradient.tsx';
  const mdxSource = await readAndConvertToMDX(filePath);

  console.log('mdxSource', mdxSource);

  return (
    <div>
      <div className='container text-white'>
        <CodeBlock markdownContent={mdxSource} />
      </div>
    </div>
  );

  //   const markdownContent = `
  // \`\`\`jsx
  // import { TextGradient } from '@/components/lab/Text/TextGradient';

  // const Component = () => {
  //   return <TextGradient>TextGradient</TextGradient>;
  // };
  // \`\`\`
  // `;

  // return (
  //   <div>
  //     <div className='container text-white'>
  //       <CodeBlock markdownContent={markdownContent} />
  //     </div>
  //   </div>
  // );
};

export default ComponentPage;
