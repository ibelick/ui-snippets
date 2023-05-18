import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import CodeBlock from '@/components/glazed/CodeBlock';
import { GLAZED_COMPONENTS } from '@/data/components';
import CopyCode from '@/components/glazed/CopyCode';
import ComponentPlayground from '@/components/glazed/ComponentPlayground';

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    'utf8'
  );

  return fileContent;
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

  const filePath = `./components/lab/${
    currentComponentData?.type
  }/${currentComponentData?.name.replace(/\s+/g, '')}.tsx`;
  const code = await readFilePath(filePath);

  return (
    <div className='mt-10 pb-32'>
      <h1 className='mb-2 text-xl text-gray-400'>
        {currentComponentData.name}
      </h1>
      <div className='container text-white'>
        <ComponentPlayground isCentered>
          <currentComponentData.component />
        </ComponentPlayground>
        <div className='relative mt-6'>
          <div className='absolute right-4 top-4'>
            <CopyCode code={code} />
          </div>
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
