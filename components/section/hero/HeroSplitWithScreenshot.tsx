import Button from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const HeroSplitWithScreenshot = () => {
  return (
    <section className="relative flex items-center w-full bg-white">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a short heading
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Use this paragraph to share information about your company
                    or products. Make it engaging and interesting, and showcase
                    your brands personality. Thanks for visiting our website!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <Button>Get started</Button>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Learn more
                    <span aria-hidden="true">
                      <ArrowRightIcon className="w-4 h-4" />{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 lg:mt-0">
              <img
                className="rounded-xl object-cover object-center w-full mx-auto bg-black lg:ml-auto h-full"
                alt="hero"
                src="https://source.unsplash.com/random/900×700/?website"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitWithScreenshot;
