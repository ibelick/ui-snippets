import {
  ArrowRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Button from "@/components/ui/button";

const HeroSimpleCentered = () => {
  return (
    <section>
      <div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="mt-8 text-5xl font-medium tracking-tighter text-black">
              Hello, Im <span className="text-blue-500">John Doe</span>
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
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

        <div className="flex justify-center gap-6 mt-6">
          <a className="p-1 -m-1 group" aria-label="Follow on Twitter" href="#">
            <TwitterLogoIcon className="w-6 h-6 transition fill-black hover:text-blue-500" />
          </a>
          <a
            className="p-1 -m-1 group"
            aria-label="Follow on Instagram"
            href="#"
          >
            <InstagramLogoIcon className="w-6 h-6 transition fill-black hover:text-blue-500" />
          </a>
          <a className="p-1 -m-1 group" aria-label="Follow on GitHub" href="#">
            <GitHubLogoIcon className="w-6 h-6 transition fill-black hover:text-blue-500" />
          </a>
          <a
            className="p-1 -m-1 group"
            aria-label="Follow on LinkedIn"
            href="#"
          >
            <LinkedInLogoIcon className="w-6 h-6 transition fill-black hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSimpleCentered;
