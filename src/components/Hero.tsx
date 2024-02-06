import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, ChevronDown } from "lucide-react";

// add alternate title for where 'Web Developer' appears - they can change on a timer
const Hero = () => {
  return (
    // add in 'bg-hero' for 'bg-muted' when you find a better image
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-muted bg-no-repeat bg-cover bg-bottom dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className="h1 mb-4">Hello, my name is Ben C.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Here&apos;s a brief overview of who I am, what I can do, skills
              and experiences I have, and how to get in touch.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className="gap-x-2">Contact Me <Send size={18}/> </Button>
              </Link>
              {/* you can get rid of the hover style once the bg img is sorted */}
              <Button variant='secondary' className="gap-x-2 hover:outline">Download CV <Download size={18}/> </Button>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">image</div>
        </div>
        {/* icon - add 'animate-bounce' later */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <ChevronDown className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
