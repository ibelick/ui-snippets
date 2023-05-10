import ComponentPlayground from '@/components/glazed/ComponentPlayground';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-7xl py-10'>
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='mb-2 text-xl font-bold'>Button</h2>
          <ComponentPlayground isCentered className='gap-4'>
            <Button>Button</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
          </ComponentPlayground>
        </div>
        <div>
          <h2 className='mb-2 text-xl font-bold'>Badge</h2>
          <ComponentPlayground isCentered className='gap-4'>
            <Badge>Badge</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
          </ComponentPlayground>
        </div>
        <div>
          <h2 className='mb-2 text-xl font-bold'>Input</h2>
          <ComponentPlayground
            isCentered
            className='flex flex-col gap-4 [&>input]:max-w-[300px]'
          >
            <Input />
            <Input placeholder='Enter your email' />
          </ComponentPlayground>
        </div>
      </div>
    </main>
  );
}
