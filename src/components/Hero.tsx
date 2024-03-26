import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, ChevronDown } from "lucide-react";
import Socials from "./Socials";
import ProfilePic from "./ProfilePic";
// import TitleAnimation from "./TitleAnimation";

// add alternate title for where 'Web Developer' appears - they can change on a timer
// animation has to be in a client component(?)

const Hero = () => {
  return (
    <section className="h-[80vh] py-12 xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            {/* title - animation attempt */}

            {/* <TitleAnimation /> */}
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hi, my name is Ben</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Here&apos;s some stuff about me. Maybe a little more of a
              description like this. What a jerk, am I right?
            </p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />{" "}
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2 shadow-lg hover:outline"
              >
                Download CV <Download size={18} />{" "}
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
              size={50}
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* removed from below: bg-hero_shape2_light dark:bg-hero_shape2_dark */}
            <div className=" absolute -right-2 -top-1 h-[500px] w-[500px] bg-no-repeat">
              <ProfilePic
                //? removed from below: bg-hero_shape
                containerStyles="dark:bg-none w-[400px] h-[400px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/profile-pic.png"
              />
            </div>
          </div>
        </div>
        {/* icon - add 'animate-bounce' later */}
        <div className="absolute bottom-44 left-2/4 hidden md:flex xl:bottom-12">
          <ChevronDown className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
