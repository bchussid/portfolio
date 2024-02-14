import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, ChevronDown } from "lucide-react";
import Socials from "./Socials";
import ProfilePic from "./ProfilePic";

// add alternate title for where 'Web Developer' appears - they can change on a timer
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ben C.</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Here&apos;s a brief overview of who I am, what I can do, skills
              and experiences I have, and how to get in touch.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />{" "}
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2 hover:outline shadow-lg"
              >
                Download CV <Download size={18} />{" "}
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-destructive transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <ProfilePic
                containerStyles="bg-hero_shape w-[400px] h-[400px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/profile-pic.png"
              />
            </div>
          </div>
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
