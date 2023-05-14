import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import CodeBlock from '@/components/glazed/CodeBlock';
import { GLAZED_COMPONENTS } from '@/data/components';

async function readAndConvertToMDX(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    'utf8'
  );
  const tsxCode = '`\n' + fileContent + '\n`\n';

  return tsxCode;
}

export async function generateStaticParams() {
  const componentSlugs = GLAZED_COMPONENTS.map((component) => ({
    slug: component.slug,
  }));

  return componentSlugs;
}

export const dynamicParams = false;

const ComponentPage = async ({ params }: { params: { slug: string } }) => {
  const currentComponentData = GLAZED_COMPONENTS.find(
    (component) => component.slug === params.slug
  );

  if (!currentComponentData) {
    return <div>Component not found</div>;
  }

  const filePath = `./components/lab/${currentComponentData?.type}/${currentComponentData?.component.name}.tsx`;
  const mdxSource = await readAndConvertToMDX(filePath);

  // copy code

  return (
    <div>
      <div className='container text-white'>
        <currentComponentData.component />
        <CodeBlock markdownContent={mdxSource} />
      </div>
    </div>
  );
};

export default ComponentPage;
