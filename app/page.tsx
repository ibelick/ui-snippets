import CardBasic from "@/components/card";
import Footer from "@/components/section/footer";
import Hero from "@/components/section/hero";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <Hero />
        <Button>hello</Button>
        <Input placeholder="hello" />
        <CardBasic />
        <Footer />
      </div>
    </main>
  );
}
