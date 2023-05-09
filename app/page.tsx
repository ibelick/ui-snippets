import CardBasic from "@/components/card";
import ComponentPlayground from "@/components/glazed/ComponentPlayground";
import Footer from "@/components/section/footer";
import HeroSimpleCentered from "@/components/section/hero/HeroSimpleCentered";
import HeroSplitWithScreenshot from "@/components/section/hero/HeroSplitWithScreenshot";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen mt-10">
      <div className="flex flex-col gap-8">
        <ComponentPlayground>
          <HeroSimpleCentered />
        </ComponentPlayground>
        <ComponentPlayground>
          <HeroSplitWithScreenshot />
        </ComponentPlayground>
        <ComponentPlayground>
          <Button>hello</Button>
        </ComponentPlayground>
        <Input placeholder="hello" />
        <CardBasic />
        <Footer />
      </div>
    </main>
  );
}
